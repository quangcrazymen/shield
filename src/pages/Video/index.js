import "./style.css"
function Video() {
    return (
        <div>
            <h1>Video page</h1>

            <div className="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TxtwlOqeg5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Video;