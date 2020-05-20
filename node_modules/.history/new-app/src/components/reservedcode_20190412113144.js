<header className="App-header">
                <div className= "Menu">
                  {/* <Menu items = {
                        items
                  }>  
                  </Menu> */}

                  <ul className="list">
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">Employees</a></li>
                    <li><a href="#contact">Performance</a></li>
                    <li><a href="#about"> Transcript</a></li>
                  </ul>

                </div>
          </header>

          <div className="searchBar">
            <div className="ui action input">
                  <input type="text" placeholder="Search..."/>
                  <button className="ui icon button">
                    <i className="search icon">
                  </i>
                  </button>
            </div> 
          </div>

                  <div className="searchBar">
            <div className="ui action input">
                  <input type="text" placeholder="Search..."/>
                  <button className="ui icon button">
                    <i className="search icon">
                  </i>
                  </button>
            </div>

             <div className= "Menu">
                  <Menu items = {
                        items
                  }>  
                  </Menu>

                  <ul className="list">
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">Employees</a></li>
                    <li><a href="#contact">Performance</a></li>
                    <li><a href="#about"> Transcript</a></li>
                  </ul>
                </div>

                const items = [
  { key: 'editorials', active: true, name: 'Employees' },
  { key: 'review', name: 'Performance Assesment' },
  { key: 'events', name: 'Transcript' },
]
