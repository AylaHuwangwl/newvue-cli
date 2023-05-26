module.exports = {
  presets:[
    [require.resolve("@babel/preset-env"),{
      "useBuiltIns": "entry",
      "corejs": "3.22"
    }],require.resolve("@babel/preset-typescript")
  ]
}