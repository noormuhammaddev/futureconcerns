import React from 'react';

const JobApplyForm = () => {
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const fileUploadStyle = {
        height: '300px'
    };
    const fileInputStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '0',
        zIndex: '100'
    }
    
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <section className="mb-5">
                    <h2>Position & Objective</h2><hr />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Apply for</option>
                                    <option>Software engineer</option>
                                    <option>Software Developer</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Other" 
                                    className="form-control" 
                                    
                                    onChange={handleChange} 
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <textarea className="form-control" placeholder="Career Objective"></textarea>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h2>Basic Information</h2><hr />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Phone" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Email" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Address" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Country</option>
                                    <option>Pakistan</option>
                                    <option>China</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Nationality</option>
                                    <option>Pakistan</option>
                                    <option>China</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Date of Birth" 
                                    className="form-control" 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="form-group">
                                <select className="form-control">
                                    <option>Maritial Status</option>
                                    <option>Married</option>
                                    <option>Unmarried</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h2>Upload Resume/CV</h2><hr />
                    <div className="position-relative border d-flex align-items-center flex-column justify-content-center" style={fileUploadStyle}>
                        <input type="file" style={fileInputStyle} /> 
                        <img src="https://linumtech.com/static/media/upload-icon.1c4c14aeaa017bbafca317a140ece485.svg" alt="upload" />
                        <p >Drag & Drop File here</p>
                        <p >or</p>
                        <button class="default-btn"><i className="flaticon-right"></i> Browse File</button>
                    </div>
                </section>

                <div className="d-flex justify-content-end">
                    <button class="default-btn"><i className="flaticon-right"></i> Submit</button>
                </div>
                
            </div>
        </section>
    )
}

export default JobApplyForm;