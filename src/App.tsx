import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import './App.css'
// import LazyLoad from 'react-lazyload'
import LazyLoad from './MyLazyLoad'
import { lazy } from 'react'

const Test = lazy(() => import('./Test'));

function App() {
  return (
    <div>
      {/* <Test /> */}
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <LazyLoad placeholder={<div>loading...</div>} onContentVisible={() => {
        console.log('comp visible')
      }}>
        <Test />
      </LazyLoad>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <LazyLoad placeholder={<div>loading...</div>} onContentVisible={() => {
        console.log('img visible')
      }}>
        <img src={img1}/>
      </LazyLoad>
      <LazyLoad placeholder={<div>loading...</div>} offset={300}>
        <img src={img2}/>
      </LazyLoad>
    </div>
  )
}

export default App
