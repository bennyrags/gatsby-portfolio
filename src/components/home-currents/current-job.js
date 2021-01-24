import React from 'react';
// import {useStaticQuery, graphql} from 'gatsby';

const currentJob= () => {
{/* <StaticQuery
query={graphql` query  {
    allCurrentsJson {
        edges {
            node {
                currentJob
            }
        }
    }

}

`} */}

///>
    // const job = useStaticQuery(graphql`
    //   {
    //     allCurrentsJson {
    //         edges {
    //             node {
    //                 currentJob
    //             }
    //         }
    //     }

    // }
    // `)

const job = 'Thomson Reuters';

    return (
        <h3>{job}</h3>
    )
};

export default currentJob;
