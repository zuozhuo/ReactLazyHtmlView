// http://eslint.org/docs/user-guide/configuring
// https://github.com/vuejs-templates/webpack/blob/master/template/.eslintrc.js
// TODO 挪到xm-webpack-config中，然后用deep-assign合并配置


module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint-config-airbnb",
    "env": { // http://eslint.org/docs/user-guide/configuring#specifying-environments
        // 支持一些特定环境的全局变量支持，例如window、document
        "browser": true,
        "node": true,
        "jasmine": true,
        "jquery": true,
    },
    "rules": {
        // rule属性值的含义 http://eslint.org/docs/user-guide/getting-started#configuration
        // "off" or 0  "warn" or 1 "error" or 2
        "generator-star-spacing": [0],
        "consistent-return": [0],
        "react/forbid-prop-types": [0],
        "react/jsx-filename-extension": [1, {"extensions": [".js"]}],
        "global-require": [1],
        "import/prefer-default-export": [0],
        "react/jsx-no-bind": [0],
        "react/prop-types": [0],
        "react/prefer-stateless-function": [0],
        "no-else-return": [0],
        "no-restricted-syntax": [0],
        "import/no-extraneous-dependencies": [0],
        "no-use-before-define": [0],
        "jsx-a11y/no-static-element-interactions": [0],
        "no-nested-ternary": [0],
        "arrow-body-style": [0],
        "import/extensions": [0],
        "no-bitwise": [0],
        "no-cond-assign": [0],
        "import/no-unresolved": [0],
        "require-yield": [1],

        // 缩进： airbnb默认为2个空格，改成4个空格
        "indent": ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            // CallExpression: {
            // parameters: null,
            // },
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            }
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        // 字面量对象声明时，大括号必须包含内部空格： {} airbnb要求对象必须有空格，改成不要
        'object-curly-spacing': ['error', 'never'],
        // 可以自定义标签的role属性
        'jsx-a11y/aria-role': ['off'],
        // 自闭合标签需要空格
        'react/jsx-tag-spacing': ['off'],
        'react/jsx-space-before-closing': ['off'],
        // 禁止使用index作为react的key
        'react/no-array-index-key': ['off'],
        // 禁止href=javascript:;
        'no-script-url': ['off'],
        // 禁止下划线命名变量和方法
        'no-underscore-dangle': ['off'],
        // 禁止无意义的空白
        'no-trailing-spaces': ['off'],
        // 一个js文件只允许声明一个react组件
        'react/no-multi-comp': ['off'],
        // 强制骆驼命名法
        'camelcase': ['off'],
        // 强制未使用this的实例方法改为static方法
        'class-methods-use-this': ['off'],
        // 因为css-module必须使用这种语法 styles['addRateTag'] 才能支持跳转，所以这个规则关闭了
        'dot-notation': ['off'],
    },
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true
    },
    "globals": {
        "window": true
    },
};
