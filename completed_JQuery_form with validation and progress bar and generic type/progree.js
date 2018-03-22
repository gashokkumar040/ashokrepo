$("#contactForm #form-content").keyup(function() {
  
    var numValid = 0;
    $("#contactForm #form-content[required]").each(function() {
        if (this.validity.valid) {
            numValid++;
        }
    });

    var a = 100/11, b= (a+a), c=(b+a), d=(c+a), e=(d+a), f=(e+a), g=(f+a),h=(g+a),i=(h+a),j=(i+a), k=100;

    var progress = $("#progress"),
        progressMessage = $("#progress-message");

/*
        for(var i=numValid/100;i<=numValid;i++){
            progress.attr("value", i);
        progressMessage.text(i+ "%");
        }*/
        

    if (numValid == 0) {
        progress.attr("value", "0");
        progressMessage.text(" ");
    }
    if (numValid == 1) {
        progress.attr("value", a);
        progressMessage.text(a+"%");
    }
    if (numValid == 2) {
        progress.attr("value", b);
        progressMessage.text(b+"%");
    }
    if (numValid == 3) {
        progress.attr("value", c);
        progressMessage.text(c+"%");
    }
    if (numValid == 4) {
        progress.attr("value", d);
        progressMessage.text(d+"%");
    }
    if (numValid == 5) {
        progress.attr("value", e);
        progressMessage.text(e+"%");
    }
    if (numValid == 6) {
        progress.attr("value", f);
        progressMessage.text(f+"%");
    }
    if (numValid == 7) {
        progress.attr("value", g);
        progressMessage.text(g+"%");
    }
    if (numValid == 8) {
        progress.attr("value", h);
        progressMessage.text(h+"%");
    }
    if (numValid == 9) {
        progress.attr("value", i);
        progressMessage.text(i+"%");
    }
    if (numValid == 10) {
        progress.attr("value", j);
        progressMessage.text(j+"%");
    }
    if (numValid == 11) {
        progress.attr("value", 100);
        progressMessage.text(k+"%");
    }
    
    
    });
    