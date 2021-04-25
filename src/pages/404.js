import React from 'react';
import Layout from '../components/layout'

const fourOhFour = () => {
return (    
<Layout>
    <section>
        <h1>Where do you think you're goin?</h1>
        <img src="images/angryhomer.jpg" alt="Homer annoyed at you because you went to the incorrect page"/>
        <a aria-label="link to home" href="/"><h2>Go home before you break somthin</h2></a>
    </section>    
</Layout>
)
}
export default fourOhFour;
