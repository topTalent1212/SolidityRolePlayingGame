import React from 'react'
import '../styles/App.css'


export default function App() {
  return (
    <div className="main">
      <div className="header">
          <h1>Upload your Creation here!!</h1>
      </div>
      <form>
        <div className="container">

                    <div className="form-group">
                        <label>Name of the Character</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Wallet Address</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Upload</label>
                        <br />
                        <input type="file" id="myFile" name="filename" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </div>
    </form>
    </div>
  )
}
