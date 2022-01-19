import React from 'react'

function Servicos() {
    return (
        <div>
            {/* Container (Services Section) */}
            <div id="services" className="container-fluid text-center">
                <h2>SERVICES</h2>
                <h4>What we offer</h4>
                <br />
                <div >
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-off logo-small" />
                        <h4>POWER</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-heart logo-small" />
                        <h4>LOVE</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-lock logo-small" />
                        <h4>JOB DONE</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
                <br /><br />
                <div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-leaf logo-small" />
                        <h4>GREEN</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-certificate logo-small" />
                        <h4>CERTIFIED</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-wrench logo-small" />
                        <h4 style={{ color: '#303030' }}>HARD WORK</h4>
                        <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicos
