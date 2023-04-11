---
title: Vue编码规范
date: 2022-01-28 15:30:43
permalink: /pages/eca7af/
categories:
  - Vue
  - 其他
tags:
  - 
---


本文档摘自Vue官方的编码规范，结合实际项目给出如下规范建议

### 1、组件名为多个单词

组件名应该始终是多个单词的，根组件 `App` 除外。
 这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
 反例



```dart
Vue.component('todo', {
  // ...
}) 
export default {
  name: 'Todo',
  // ...
}
```

好例子



```dart
Vue.component('todo-item', {
  // ...
})
export default {
  name: 'TodoItem',
  // ...
}
```

### 2、组件数据

组件的 `data` 必须是一个函数。
 当在组件中使用 `data` 属性的时候 (除了 `new Vue` 外的任何地方)，它的值必须是返回一个对象的函数。
 反例



```kotlin
Vue.component('some-comp', {
  data: {
    foo: 'bar'
  }
})
export default {
  data: {
    foo: 'bar'
  }
}
```

好例子



```jsx
Vue.component('some-comp', {
  data: function () {
    return {
      foo: 'bar'
    }
  }
})
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

### 3、Prop 定义

Prop 定义应该尽量详细。
 在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。
 细致的prop 定义有两个好处：
 （1）它们写明了组件的 API，所以很容易看懂组件的用法；
 （2）在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。
 反例



```csharp
// 这样做只有开发原型系统时可以接受
props: ['status']
```

好例子



```css
    props: {
      status: {
        type: String,
        required: true,
        validator: function (value) {
          return [
            'syncing',
            'synced',
            'version-conflict',
            'error'
          ].indexOf(value) !== -1
        }
      }
    }
```

### 4、为 `v-for` 设置键值

总是用 `key` 配合 `v-for`。
 在组件上总是用 `key` 配合 `v-for`，以便维护内部组件及其子树的状态。
 反例



```html
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>
```

好例子



```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

### 5、避免 `v-if` 和 `v-for` 用在一起

永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。

### 6、为组件样式设置作用域

对于应用来说，顶级 `App` 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。
 对于组件库，我们应该更倾向于选用基于 class 的策略而不是 `scoped` 特性。
 使用唯一的 class 名可以帮你确保那些三方库的 CSS 不会运用在你自己的 HTML 上。

### 7、私有属性名

在插件、混入等扩展中始终为自定义的私有属性使用 `$_` 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 `$_yourPluginName_`)。
 反例



```jsx
var myGreatMixin = {
  // ...
  methods: {
    update: function () {
      // ...
    }
  }
}
```

好例子



```php
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
```

### 8、组件文件

只要有能够拼接文件的构建系统，就把每个组件单独分成文件。
 当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。
 反例



```csharp
Vue.component('TodoList', {
  // ...
})
Vue.component('TodoItem', {
  // ...
})
```

好例子



```ruby
components/
|- TodoList.js
|- TodoItem.js
components/
|- TodoList.vue
|- TodoItem.vue
```

### 9、单文件组件文件的大小写

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。
 反例



```ruby
components/
|- mycomponent.vue
components/
|- myComponent.vue
```

好例子



```ruby
components/
|- MyComponent.vue
components/
|- my-component.vue
```

### 10、基础组件名

应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。

### 11、单例组件名

只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。
 这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。

### 12、紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。
 如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。
 反例



```ruby
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue
```

好例子



```ruby
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

### 13、组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。
 反例



```ruby
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

好例子



```ruby
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

### 14、自闭合组件

在单文件组件、字符串模板和JSX中没有内容的组件应该是自闭合的，但在 DOM 模板里永远不要这样做。
 HTML 并不支持自闭合的自定义元素
 反例



```html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent></MyComponent>
<!-- 在 DOM 模板中 -->
<my-component/>
```

好例子



```html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent/>
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

### 15、模板中的组件名大小写

对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的，但是在 DOM 模板中总是 kebab-case 的。

### 16、JS/JSX 中的组件名大小写

JS/[JSX中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中只使用 `Vue.component` 进行全局组件注册时，可以使用 kebab-case 字符串。
 对于只通过 `Vue.component` 定义全局组件的应用来说，我们推荐 kebab-case

### 17、完整单词的组件名

组件名应该倾向于完整单词而不是缩写。
 编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

### 18、Prop 名大小写

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和JSX中应该始终使用 kebab-case。
 我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

### 19、多个特性的元素

多个特性的元素应该分多行撰写，每个特性一行。
 反例



```html
<MyComponent foo="a" bar="b" baz="c"/>
```

好例子



```html
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```

### 20、模板中简单的表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。

### 21、简单的计算属性

应该把复杂计算属性分割为尽可能多的更简单的属性。

### 22、带引号的特性值

非空 HTML 特性值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。
 在 HTML 中不带空格的特性值是可以没有引号的，但这鼓励了大家在特征值里不写空格，导致可读性变差。

### 23、指令缩写

指令缩写 (用 `:` 表示 `v-bind:` 和用 `@` 表示 `v-on:`) 应该要么都用要么都不用。

### 24、组件/实例的选项的顺序

组件/实例的选项应该有统一的顺序。
 这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新属性应该放到哪里。

1. 副作用 (触发组件外的影响)

- `el`

1. 全局感知(要求组件以外的知识)

- `name`
- `parent`

1. 组件类型 (更改组件的类型)

- `functional`

1. 模板修改器 (改变模板的编译方式)

- `delimiters`
- `comments`

1. 模板依赖 (模板内使用的资源)

- `components`
- `directives`
- `filters`

1. 组合 (向选项里合并属性)

- `extends`
- `mixins`

1. 接口 (组件的接口)

- `inheritAttrs`
- `model`
- `props`/`propsData`

1. 本地状态 (本地的响应式属性)

- `data`
- `computed`

1. 事件(通过响应式事件触发的回调)

- `watch`
- 生命周期钩子 (按照它们被调用的顺序)
  - `beforeCreate`
  - `created`
  - `beforeMount`
  - `mounted`
  - `beforeUpdate`
  - `updated`
  - `activated`
  - `deactivated`
  - `beforeDestroy`
  - `destroyed`

1. 非响应式的属性 (不依赖响应系统的实例属性)

- `methods`

1. 渲染 (组件输出的声明式描述)

- `template`/`render`
- `renderError`

### 25、元素特性的顺序

元素 (包括组件) 的特性应该有统一的顺序。
 这是我们为组件选项推荐的默认顺序。它们被划分为几大类，所以你也能知道新添加的自定义特性和指令应该放到哪里。

1. 定义 (提供组件的选项)

- `is`

1. 列表渲染 (创建多个变化的相同元素)

- `v-for`

1. 条件渲染 (元素是否渲染/显示)

- `v-if`
- `v-else-if`
- `v-else`
- `v-show`
- `v-cloak`

1. 渲染方式 (改变元素的渲染方式)

- `v-pre`
- `v-once`

1. 全局感知 (需要超越组件的知识)

- `id`

1. 唯一的特性 (需要唯一值的特性)

- `ref`
- `key`
- `slot`

1. 双向绑定 (把绑定和事件结合起来)

- `v-model`

1. 其它特性(所有普通的绑定或未绑定的特性)
2. 事件(组件事件监听器)

- `v-on`

1. 内容 (覆写元素的内容)

- `v-html`
- `v-text`

### 26、组件/实例选项中的空行

你可能想在多个属性之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。
 当你的组件开始觉得密集或难以阅读时，在多个属性之间添加空行可以让其变得容易。在一些诸如 Vim 的编辑器里，这样格式化后的选项还能通过键盘被快速导航。
 好例子



```tsx
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
```

### 27、单文件组件的顶级元素的顺序

单文件组件应该总是让 `<script>`、`<template>` 和 `<style>` 标签的顺序保持一致。且 `<style>` 要放在最后，因为另外两个标签至少要有一个。

### 28、没有在 `v-if`/`v-else-if`/`v-else` 中使用 `key`

如果一组 `v-if` + `v-else` 的元素类型相同，最好使用 `key` (比如两个 `<div>` 元素)。
 默认情况下，Vue 会尽可能高效的更新 DOM。这意味着其在相同类型的元素之间切换时，会修补已存在的元素，而不是将旧的元素移除然后在同一位置添加一个新元素。如果本不相同的元素被识别为相同，则会出现意料之外的副作用。
 反例



```html
<div v-if="error">
  错误：{{ error }}
</div>
<div v-else>
  {{ results }}
</div>
```

好例子



```html
<div
  v-if="error"
  key="search-status"
>
  错误：{{ error }}
</div>
<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```

### 29、`scoped` 中的元素选择器

元素选择器应该避免在 `scoped` 中出现。
 在 `scoped` 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。
 反例



```html
<template>
  <button>X</button>
</template>
<style scoped>
button {
  background-color: red;
}
</style>
```

好例子



```html
<template>
  <button class="btn btn-close">X</button>
</template>
<style scoped>
.btn-close {
  background-color: red;
}
</style>
```

### 30、隐性的父子组件通信

应该优先通过 prop 和事件进行父子组件之间的通信，而不是 `this.$parent` 或改变 prop。
 一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让你的组件更易于理解。

### 31、非 Flux 的全局状态管理

应该优先通过Vuex管理全局状态，而不是通过 `this.$root` 或一个全局事件总线。
 通过 `this.$root` 或全局事件总线管理状态在很多简单的情况下都是很方便的，但是并不适用于绝大多数的应用。Vuex 提供的不仅是一个管理状态的中心区域，还是组织、追踪和调试状态变更的好工具。

