import React from 'react';

const Card=(props)=>{
    //Function to return number of stars based on input
    const printStars=(count)=>{
        const starList=[];
        for(let i=0;i<count;i++){
            starList.push(<div className='bi-star-fill' key={i}></div>)
        }

        return starList;

    }
    return(
        // <h1>Card Component</h1>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {props.data.map((card,i)=>(
                        <div class="col mb-5">
                        <div class="card h-100">
                        {/* <!-- Sale badge--> */}
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>
                                {props.data[i].sale}
                            </div>
                            {/* <!-- Product image--> */}
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div class="card-body p-4">
                                <div class="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 class="fw-bolder">{props.data[i].itemType}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                       {printStars(props.data[i].starCount)}
                                    </div>

                                    {/* <!-- Product price--> */}
                                    <span class="text-muted text-decoration-line-through">{props.data[i].price.oldPrice}</span>     
                                    {props.data[i].price.newPrice}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={props.manageItems} href="/">
                                            {props.data[i].buttonName}
                                    </button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>     
        </section>
    )
}


export default Card;