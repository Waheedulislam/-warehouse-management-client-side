import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='pb-1'>
                <hr />
                <h2>1) Difference between javascript and nodejs ?</h2>
                <h6>
                    <Table className='h-40'
                        striped bordered hover size="sm">
                        <thead>
                            <tr className='text-center'>
                                <th>Name</th>
                                <th>Javascript</th>
                                <th>Nodejs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Type</td>
                                <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                                <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
                            </tr>
                            <tr>
                                <td>Running Engine</td>
                                <td>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                                <td>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
                            </tr>
                        </tbody>
                    </Table>
                </h6>
            </div>
            <hr />
            <div className='pt-5 pb-1'>
                <h2>2) When should you use nodejs and when should you use mongodb ?</h2 >
                <h6 >
                    <Table className='h-40'
                        striped bordered hover size="sm">
                        <thead>
                            <tr className='text-center'>
                                <th>Name</th>
                                <th>Nodejs</th>
                                <th>Mongodb</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Type</td>
                                <td>Node.js is popularly being used in web applications because it lets the application run while it is fetching data from the backend server. It is asynchronous, event-driven and helps to build scalable web applications. Even though Node.js works well with MySQL database, the perfect combination is a NoSQL like MongoDB wherein the schema need not be well-structured. MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node.js. Another option is using CouchDB that also stores the data as JSON/BSON environment.</td>
                                <td>Node.js is a Javascript-based environment that is easily understood by most of the browsers. Here, the Javascript is Server-Side instead of serving client-side. Node.js is definitely fast and it allows to explore a dynamic range of data at real-time. It allows code sharing. Node.js acts as a proxy server and allows seamless real-time data streaming. The most important reason for the rising popularity of Node.js is that the programmer can code the server-side as well as client-side using it. Node.js is an interpreted, familiar and flexible language.</td>
                            </tr>
                        </tbody>
                    </Table>
                </h6>

            </div>
            <hr />

            <div className='pt-5'>
                <h2>3) Differences between sql and nosql databases?</h2>
                <h6>
                    <Table className='h-40'
                        striped bordered hover size="sm">
                        <thead>
                            <tr className='text-center'>
                                <th>Name</th>
                                <th>Sql</th>
                                <th>NoSql</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>SQL databases are relational.</td>
                                <td>NoSQL databases are non-relational.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>SQL databases use structured query language and have a predefined schema.</td>
                                <td> NoSQL databases have dynamic schemas for unstructured data.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>SQL databases are vertically scalable.
                                </td>
                                <td>While NoSQL databases are horizontally scalable</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>SQL databases are table-based</td>
                                <td>While NoSQL databases are document, key-value, graph, or wide-column stores.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>SQL databases are better for multi-row transactions</td>
                                <td>While NoSQL is better for unstructured data like documents or JSON.</td>
                            </tr>
                        </tbody>

                    </Table>
                </h6>
            </div>
            <hr />
            <div>

            </div>
        </div>
    );
};

export default Blogs;