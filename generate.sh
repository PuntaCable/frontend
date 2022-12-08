#!/bin/bash

name=$1

shift

# Define el nombre de las variables en el estado
stateVariableNames=($@)

# Define el nombre de las variables en el estado para la lista
listVariableNames=()



for stateVariableName in "${stateVariableNames[@]}"; do
  listVariableName="${stateVariableName}List"
  listVariableNames+=($listVariableName)
done

# Crea el archivo store.js en la carpeta store
cat <<EOF > store/$name.js
export const state = () => ({
EOF
  cat <<EOF >> store/$name.js
  $name:{},
EOF

  cat <<EOF >> store/$name.js
  ${name}List:{},
EOF

for stateVariableName in "${stateVariableNames[@]}"; do
  cat <<EOF >> store/$name.js
  $stateVariableName: {},
EOF
done
for listVariableName in "${listVariableNames[@]}"; do
  cat <<EOF >> store/$name.js
  $listVariableName: [],
EOF
done

cat <<EOF >> store/$name.js
})

export const actions = {
EOF



cat <<EOF >> store/$name.js
$name(context, id) {
  return axios.get(\`/$name/\${id}\`)
    .then(response => {
      context.commit('set', response.data)
    })
},
${name}List(context) {
  return axios.get(\`/$name\`)
    .then(response => {
      context.commit('set', response.data)
    })
},
EOF

for stateVariableName in "${stateVariableNames[@]}"; do
  actionName="find${stateVariableName^}"
  if [[ $stateVariableName != *"List"* ]]; then
    cat <<EOF >> store/$name.js
  $actionName(context, id) {
    return axios.get(\`/$name/$stateVariableName/\${id}\`)
      .then(response => {
        context.commit('set', response.data)
      })
  },
EOF
  else
    cat <<EOF >> store/$name.js
  $actionName(context) {
    return axios.get(\`/$stateVariableName\`)
      .then(response => {
        context.commit('set', response.data)
      })
  },
EOF
  fi
done


cat <<EOF >> store/$name.js
}

export const mutations = {
EOF
  cat <<EOF >> store/$name.js
  set(state, data) {
    state.$name = data
  },
EOF
  cat <<EOF >> store/$name.js
  setList(state, data) {
    state.${name}List = data
  },
EOF


for stateVariableName in "${stateVariableNames[@]}"; do
  cat <<EOF >> store/$name.js
  set(state, data) {
    state.$stateVariableName = data
  },
EOF
done

for listVariableName in "${listVariableNames[@]}"; do
  cat <<EOF >> store/$name.js
  setList(state, data) {
    state.$listVariableName = data
  },
EOF
done

cat <<EOF >> store/$name.js
}
EOF

