// Licensed under the Tumbolia Public License. See footer for details.

//------------------------------------------------------------------------------
// add the contents of this file to your ~/.js/chromium.googlecode.com.js file
//------------------------------------------------------------------------------

// punch card: https://github.com/apache/incubator-cordova-js/graphs/punch-card
// punch data: https://github.com/apache/incubator-cordova-js/graphs/punch-card-data
// http://chromium.googlecode.com/svn/trunk/samples/audio/shiny-drum-machine.html

//------------------------------------------------------------------------------
if (location.pathname == "/svn/trunk/samples/audio/shiny-drum-machine.html") {
    setTimeout(installPunchCardPlayer, 2000)
}

//------------------------------------------------------------------------------
function installPunchCardPlayer() {
    console.log("googlecode.com.js: installing punch card player")

    var ghUser   = "apache"
    var ghRepo   = "incubator-cordova-weinre"
    var pcURL    = "https://github.com/" + ghUser + "/" + ghRepo + "/graphs/punch-card-data"
    
    $.ajax(pcURL).done(function(data) {
        loadData(data)
    })
}
    
//------------------------------------------------------------------------------
function loadData(data) { 
    var notes = []
    for (var i=0; i<6; i++) notes[i] = []
    
    var max = 0
    for (var i=0; i<data.length; i++) {
        var da = data[i][0]
        var hr = data[i][1]
        var co = data[i][2]
        
        if (da == 0) continue
        if (hr < 8) continue
        
        da -= 1
        hr -= 8
        
        notes[da][hr] = co
        
        if (co > max) max = co
    }

    for (var i=0; i<6; i++) {
        for (var j=0; j<16; j++) {
            var val = notes[i][j]
            if      (val <   max/3) val = 0
            else if (val < 2*max/3) val = 1
            else                    val = 2
            
            notes[i][j] = val
        }
    }

    var script = []
    
    script.push("debugger")
    script.push("theBeat.rhythm1 = " + JSON.stringify(notes[0]))
    script.push("theBeat.rhythm2 = " + JSON.stringify(notes[1]))
    script.push("theBeat.rhythm3 = " + JSON.stringify(notes[2]))
    script.push("theBeat.rhythm4 = " + JSON.stringify(notes[3]))
    script.push("theBeat.rhythm5 = " + JSON.stringify(notes[4]))
    script.push("theBeat.rhythm6 = " + JSON.stringify(notes[5]))
    script.push("updateControls()")
    script = script.join(";\n")

    var element = $("<script>")
    element.text(script)
    element = element[0]

    document.body.appendChild(element)    
}

//------------------------------------------------------------------------------
// Copyright 2012, Patrick Mueller
// 
// Tumbolia Public License
// 
// Copying and distribution of this file, with or without modification, are
// permitted in any medium without royalty provided the copyright notice and this
// notice are preserved.
// 
// TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
// 
//   0. opan saurce LOL
//------------------------------------------------------------------------------