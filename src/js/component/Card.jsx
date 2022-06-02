import React from "react";

export const Card=()=>{
   return( <div>
        <p className="card-auto" style={{display:"flex"}}>
          
          <div class="card-col-sm-3" >
              <img src="..." class="card-img-top" alt="..."/>
              <div class="col-sm-5">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
              </ul>
              <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
              </div>
          </div>
          <div class="card-col-sm-3" >
            <img src="..." class="card-img-top" alt="..."/>
            <div class="col-sm-5">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        </p>
    </div>)
}
