

export default function Sidebar(){
    return <>
    <div class="d-flex flex-column p-3 text-white bg-dark" id="sidebar-wrapper">
        
        <hr></hr>
        <div class="list-group list-group-flush" style={{width:"150px"}}>
            <a class="list-group-item list-group-item-action text-white bg-dark" href="#!"><i class="fa fa-tachometer" aria-hidden="true"></i>&emsp;Dashboard</a>
            <a class="list-group-item list-group-item-action text-white bg-dark" href="#!"><i class="fa fa-users" aria-hidden="true"></i>&emsp;Users</a>
            <a class="list-group-item list-group-item-action text-white bg-dark" href="#!"><i class="fa fa-shopping-bag" aria-hidden="true"></i>&emsp;Products</a>
        </div>
    </div>
    </>

}