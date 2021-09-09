import React from 'react';
import { Link } from "gatsby";

import Layout from "../../components/layout";

const About = ({location}) => (
    <Layout location={location}>
        <div>
            <h1>
                About us
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Phasellus consectetur nibh in arcu rhoncus, malesuada 
            lacinia purus imperdiet. Aenean tristique mauris sed nisi 
            dapibus vestibulum. Quisque tincidunt faucibus convallis. 
            Duis consectetur velit quis aliquam commodo. 
            Pellentesque dictum mi ut congue feugiat. 
            Nunc ut ex nec sem porta finibus. Cras sed tincidunt dui. 
            Morbi volutpat justo eu dictum condimentum. 
            Donec non ipsum feugiat, dignissim eros nec, facilisis arcu. 
            Sed suscipit nisl eget nisi auctor tincidunt. 
            In imperdiet tempus leo. Curabitur ornare in nulla sit amet bibendum. 
            Donec blandit pharetra consectetur.
            </p>
            <p>
                <Link to="/">Homepage</Link>
            </p>
        </div>
    </Layout>
);
export default About;