


export default function Topbar(){

    return <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <a href="/" class="d-flex align-items-center mb-4 mb-md-0 me-md-auto navbar-brand text-decoration-none"><i class="fa fa-wpexplorer" aria-hidden="true"></i>SellPro</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#!">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item"><a class="nav-link" style={{visibility:"hidden"}} href="#!">Link</a></li>
                            <li class="nav-item"><a class="nav-link" style={{visibility:"hidden"}} href="#!">abcdefghi</a></li>
                            <li class="nav-item"><a class="nav-link" style={{visibility:"hidden"}} href="#!">jklmnopqrst</a></li>
                            <li class="nav-item"><a class="nav-link" style={{visibility:"hidden"}} href="#!">uvwxyz</a></li>
                            
                        </ul>
                    </div>
                </nav>
    </>
}