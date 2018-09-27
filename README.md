# @composi/fragment

A function to return a collection of sibling elements to be consumed by another component. For use with @composi/core. 

## Install

```
npm install --save-dev @composi/fragment
```

## Using

This function allows you to group a number a siblings together instead of needing to enclose them in an html tag. The Fragment tag will be the parent, however it will not be converted into a tag in the DOM. Instead its children will become the children of whatever the Fragment gets inserted into. This is similar to how document fragments work. However, this is not an actual document fragment.

```javascript
function Title() {
  return (
    <Fragment>
      <h1>Main Title</h1>
      <h2>Secondary Title</h2>
    </Fragment>
  )
}
```

Let's use the Fragment tag to create a list. Before we can use the Fragment tag, we need to import it into our project:

```javascript
import { h, render } from '@composi/core'
import { Fragment } from '@composi/fragment'

const fruits = ['Apples', 'Oranges', 'Bananas']

function List({data}) {
  function ListItems({data}) {
    return (
      <Fragment>
        {
          data.map(fruit => <li>{fruit}</li>)
        }
      </Fragment>
    )
  }
  return (
    <ul>
      <ListItems data={data} />
    </ul>
  )
}

render(<List data={fruits} />, 'body')
```

Because Fragment just returns its children, if you nest them, their children will be flattened. For example, the result of the following code will be flattened to one array of six siblings.

```javascript
const letters = ['A', 'B', 'C', 'D', 'E', 'F']
function Items({letters}) {
  return (
    <main>
      <Fragment>
        <span>{letters[0]}</span>
        <span>{letters[1]}</span>
        <Fragment>
          <span>{letters[2]}</span>
          <span>{letters[3]}</span>
          <Fragment>
            <span>{letters[4]}</span>
            <span>{letters[5]}</span>
          </Fragment>
        </Fragment>
      </Fragment>
    </main>
  )
}
```