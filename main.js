(function(){
    var element = function(id){
        return document.getElementById(id);
    }

    // Get Elements
    var status = element('status');
    var messages = element('messages');
    var textarea = element('textarea');
    var username = element('username');
    var clearButton = element('clearButton');

    // Set default status
    var statusDefault = status.textContent;

    var setStatus = function(s) {
        // Set status
        status.textContent = s;

        if(s !== statusDefault){
            var delay = setTimeout(function(){
                setStatus(statusDefault);
            }, 4000);
        }
    }

    // Connect to socket.io
    var socket = io.connect('http://127.0.0.1:4000');

    // Check for connection
    if(socket !== undefined){
        console.log('Connected to socket...');

        socket.on('output', function(data){
            console.log(data);
        });
    }
})();