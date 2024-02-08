export default function Projects() {
    return (
        <div className="mt-4 col-md-6 ms-3">
            <div className="card mb-3" style={{ maxWidth: 700 + 'px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://placehold.co/300x300.png" className="img-fluid rounded-start" alt="project" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                        
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}