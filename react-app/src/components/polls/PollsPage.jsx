import NavBar from "../NavBar";
import React from "react";

function PollsPage() {
    return (
        <div>
            <NavBar />
            <div align = "center"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfnPLI9e5gSDthzeJLQ5bkarewLu_68OVq8ErkUPdRvknMvKQ/viewform?embedded=true" name="polls" width="640" height="709" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> </div>
        </div>
    )
}

export default PollsPage;