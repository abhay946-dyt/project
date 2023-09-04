import React from 'react'

export default function Card() {
    return (
        <div>
            <div>

                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/id/1398317278/photo/thai-fried-rice-with-shrimp-green-onion-lime-on-wooden-background-side-view-traditional-thai.webp?b=1&s=170667a&w=0&k=20&c=pMdJzc-K7wB6ABfBAhGWPa9DRLaJhETAzP3l76DSm_k=" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is some important text.</p>
                        <div className='container w-100'></div>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}

                        </select>

                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
