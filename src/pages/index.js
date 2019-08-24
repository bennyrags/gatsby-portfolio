import React from "react"
import Header from '../components/header/header'
import Layout from '../components/layout';
import CurrentBook from '../components/home-currents/current-book';
import CurrentJob from '../components/home-currents/current-job';
import CurrentGeek from '../components/home-currents/current-geeking';
export default () => <div>
    
    <Layout>
    <section style={{height:'100vh',background:'url(/monkeyandi_478x706.jpg) no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
    </section>
    <section style={{height:'100vh',overflow:'scroll'}}>
  <section style={{paddingTop:'70px'}}>
    <h1>Hello, I'm Ben</h1>
    <h2>I build websites and web apps</h2>
    <h2>I'm currently working at:</h2>
    <CurrentJob />
    <h2>I'm currently reading:</h2>
    <CurrentBook />
    <h2>I'm currently geeking out on:</h2>
    <CurrentGeek />
    
    </section>
    </section>
    
    
    
    </Layout>
    </div>
