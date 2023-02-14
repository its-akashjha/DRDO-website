/*---------------------------------------------------------------------*/ ;
(function($) {
    /*================= Global Variable Start =================*/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var IEbellow9 = !$.support.leadingWhitespace;
    var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
    var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;

    function isIEver() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
    //if (isIEver () == 8) {}
    /* console.log(window.oncontextmenu);
	
    window.oncontextmenu = null;
	
    window.oncontextmenu = function () {
       return false;
    }
    document.onkeypress = function (event) {
    	event = (event || window.event);
    	if (event.keyCode == 123) {
    		return false;
    	}
    }
    document.onmousedown = function (event) {
    	event = (event || window.event);
    	if (event.keyCode == 123) {
    		return false;
    	}
    }
    document.onkeydown = function (event) {
    	event = (event || window.event);
    	if (event.keyCode == 123) {
    		return false;
    	}
    }
    // To To Disable ctrl+u
    jQuery(document).ready(function($){
    	$(document).keydown(function(event) {
    		var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    		if (event.ctrlKey && (pressedKey == "u")) {
    			console.log('Sorry, This Functionality Has Been Disabled!');
    			//disable key press porcessing
    			return false;
    		}
    	});
    });
    $(document).on("contextmenu", function (e) {
    	e.preventDefault();
    }); */
    var base_url = $("input[id=base_url]").val();
    var jsFolder = base_url + "/themes/drdo/js/";
    var cssFolder = base_url + "themes/drdo/css/";
    var ww = document.body.clientWidth,
        wh = document.body.clientHeight;
    var mobilePort = 1024,
        ipadView = 1024,
        wideScreen = 1600;
    /*================= Global Variable End =================*/
    //css3 style calling 
    document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder + 'animate.css">');
    /*================= On Document Load Start =================*/
    $(document).ready(function() {
        $('body').removeClass('noJS').addClass("hasJS");
        $(this).scrollTop(0);
        getWidth();
        //animation();
        stickyHeader();
        homePageProductSlider();

        if ($("form.otp-verification-form").length) {
            var timer2 = "2:00";
            var interval = setInterval(function() {
                var timer = timer2.split(':');
                //by parsing integer, I avoid all extra string processing
                var minutes = parseInt(timer[0], 10);
                var seconds = parseInt(timer[1], 10);
                --seconds;
                minutes = (seconds < 0) ? --minutes : minutes;
                if (minutes < 0) clearInterval(interval);
                seconds = (seconds < 0) ? 59 : seconds;
                seconds = (seconds < 10) ? '0' + seconds : seconds;
                //minutes = (minutes < 10) ?  minutes : minutes;
                $('.countdown').html('<p>You may resend OTP in ' + minutes + ':' + seconds + ' minutes</p>');
                if (minutes == -1 && seconds == 59) {
                    $('.countdown').remove();
                    $('.resendotp').removeClass('hideThis');
                }
                timer2 = minutes + ':' + seconds;
            }, 1000);
        }

        if ($("form.user-register-form").length) {
            $("input[name='field_mobile_number[0][value]']").focusout(function() {
                if ($(this).val() != "") {
                    //$("#send_otp").removeClass('hideThis').show();
                    //$("p.messageOtp").remove();
                }

            });
            $("#send_otp").click(function(e) {
                //$("p.messageOtp").remove();
                $(".form-item-field-mobile-number-0-value p.messageOtp").text('Loading...');
                e.preventDefault();
                var base_url = $('input#base_url').val();
                //alert(base_url);
                var mob_value = $("input[name='field_mobile_number[0][value]']").val();
                if (mob_value != "") {
                    $(".form-item-field-mobile-number-0-value p.messageOtp").remove();
                    var ajaxLink = base_url + 'send-otp-registration-form/' + mob_value;
                    $.ajax({
                        url: ajaxLink,
                        success: function(result) {
                            var messageType = result.split('-');
                            $('#send_otp').addClass('hideThis');
                            $(".form-item-field-mobile-number-0-value p.messageOtp").remove();
                            $('.countdown').show();
                            $("input[name='field_mobile_number[0][value]']").after('<p class="messageOtp ' + messageType[0] + '">' + messageType[1] + '</p>');
                            if (messageType[0] == "success") {
                                $(".opt_section").removeClass('hideThis');
                                var timer2 = "2:00";
                                var interval = setInterval(function() {
                                    var timer = timer2.split(':');
                                    //by parsing integer, I avoid all extra string processing
                                    var minutes = parseInt(timer[0], 10);
                                    var seconds = parseInt(timer[1], 10);
                                    --seconds;
                                    minutes = (seconds < 0) ? --minutes : minutes;
                                    if (minutes < 0) clearInterval(interval);
                                    seconds = (seconds < 0) ? 59 : seconds;
                                    seconds = (seconds < 10) ? '0' + seconds : seconds;
                                    //minutes = (minutes < 10) ?  minutes : minutes;
                                    $('.countdown').html('<p>You may resend OTP in ' + minutes + ':' + seconds + ' minutes</p>');
                                    if (minutes == -1 && seconds == 59) {
                                        $('.countdown').hide();
                                        $('#send_otp').removeClass('hideThis');
                                        $('#send_otp').val('Resend OTP');
                                    }
                                    timer2 = minutes + ':' + seconds;
                                }, 1000);
                            }
                            if (messageType[0] == "error" && messageType[1] == "Now you can Resend OTP.") {
                                $('.countdown').hide();
                                $('#send_otp').removeClass('hideThis');
                                $('#send_otp').val('Resend OTP');
                            }
                            if (messageType[0] == "error") {
                                $('.countdown').hide();
                            }
                        }
                    });
                }
            });
            $(".opt_section .form-submit").click(function(e) {
                $("p.messageVerifyOtp").remove();
                e.preventDefault();
                var base_url = $('input#base_url').val();
                //alert(base_url);
                var mob_value = $("input[name='field_mobile_number[0][value]']").val();
                var verify_otp_value = $("input[name='otp']").val();
                if (verify_otp_value != "") {
                    $(".form-item-field-mobile-number-0-value p.messageOtp").remove();
                    var ajaxLink = base_url + 'verify-send-otp-registration-form/' + mob_value + '/' + verify_otp_value;
                    $.ajax({
                        url: ajaxLink,
                        success: function(result) {
                            var messageType = result.split('-');
                            $(".opt_section p.messageOtp").remove();
                            $("input[name='otp']").after('<p class="messageVerifyOtp ' + messageType[0] + '">' + messageType[1] + '</p>');
                            if (messageType[0] == "success") {
                                $(".opt_section").addClass('hideThis');
                                $("#send_otp").addClass('hideThis');
                                $("input[name='field_mobile_number[0][value]']").after('<p class="messageOtp ' + messageType[0] + '">' + messageType[1] + '</p>');
                            }
                        }
                    });
                }
            });

        }

        if ($('body').hasClass('page-node-type-vendor_registration') || $('body').hasClass('page-vendor-registration')) {
            $('.field-group-form-step.step-1').prepend('<center><h3>DRDO VR01</h3></center>');
            if ($('.field--name-field-payment-receipt').length) {
                $('.formImpInfo').hide();
                $('.field--name-field-payment-receipt').after('<div class="noteUr mrgL10 mrgB10"><strong>Note</strong> : For any query, kindly contact Director DFMM, DRDO Bhawan, Rajaji Marg, Delhi – 110011,<br/><strong>Mail</strong>: director_dfmm[at]hqr[dot]drdo[dot]in</div>');
            }
            if ($('.makePaymentbtn').length) {
                $('.makePaymentbtn .mkpaybtn').css('opacity', '0.1');
                $('.makePaymentbtn .mkpaybtn').removeAttr('href');
                $('.makePaymentbtn .mkpaybtn').css('cursor', 'default');
                $("input[name='field_how_to_make_payment[How To Make Payment]']").click(function() {
                    if ($(this).prop('checked') == true) {
                        //console.log($(this).prop('checked'));
                        //var checkedProp = $("input[name='field_term_and_conditions[Term and Conditions]']").prop('checked');
                        var checkedProp = $(this).prop('checked');
                        if (checkedProp) {
                            $('.makePaymentbtn .mkpaybtn').css('opacity', '1');
                            $('.makePaymentbtn .mkpaybtn').attr('href', 'https://cmp.onlinesbi.com/MOD/home.htm');
                            $('.makePaymentbtn .mkpaybtn').attr('target', '_blank');
                            $('.makePaymentbtn .mkpaybtn').css('cursor', 'pointer');
                        } else {
                            $('.makePaymentbtn .mkpaybtn').css('opacity', '0.1');
                            $('.makePaymentbtn .mkpaybtn').removeAttr('href');
                            $('.makePaymentbtn .mkpaybtn').css('cursor', 'default');
                        }
                    } else {
                        $('.makePaymentbtn .mkpaybtn').css('opacity', '0.1');
                        $('.makePaymentbtn .mkpaybtn').removeAttr('href');
                        $('.makePaymentbtn .mkpaybtn').css('cursor', 'default');
                    }
                });
                $("input[name='field_term_and_conditions[Term and Conditions]']").click(function() {
                    if ($(this).prop('checked') == true) {
                        //console.log($(this).prop('checked'));
                        $('.makePaymentbtn .mkpaybtn').removeAttr('href');
                        var checkedProp = $("input[name='field_how_to_make_payment[How To Make Payment]']").prop('checked');
                        if (checkedProp) {
                            $('.makePaymentbtn .mkpaybtn').css('opacity', '1');
                            $('.makePaymentbtn .mkpaybtn').attr('href', 'https://cmp.onlinesbi.com/MOD/home.htm');
                            $('.makePaymentbtn .mkpaybtn').attr('target', '_blank');
                            $('.makePaymentbtn .mkpaybtn').css('cursor', 'pointer');
                        } else {
                            $('.makePaymentbtn .mkpaybtn').css('opacity', '0.1');
                            $('.makePaymentbtn .mkpaybtn').removeAttr('href');
                            $('.makePaymentbtn .mkpaybtn').css('cursor', 'default');
                        }
                    } else {
                        $('.makePaymentbtn .mkpaybtn').css('opacity', '0.1');
                        $('.makePaymentbtn .mkpaybtn').removeAttr('href');
                        $('.makePaymentbtn .mkpaybtn').css('cursor', 'default');
                    }
                });
            }

            $('#field-branch-sales-office').prepend('<div class="chkBox sameAsAdd"><input type="checkbox" name="sameas" value="Yes" id="sameAsChkBox" /><label for="sameAsChkBox" class="chkBoxLbl" id="chkBoxLbl">Same as above</label></div>');
            $("#sameAsChkBox").click(function() {
                var attrVal = $(this).attr('checked');
                if (attrVal == "checked") {
                    var addLine1 = $("#edit-field-address-line-1-0-value").val();
                    if (addLine1 != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-address-line-1-0-value").val(addLine1);
                    }
                    var addLine2 = $("#edit-field-address-line-2-0-value").val();
                    if (addLine2 != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-address-line-2-0-value").val(addLine2);
                    }
                    var addState = $("#edit-field-vendor-registration-state").val();
                    if (addState != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-sales-office-state").val(addState);
                    }
                    var addDistrict = $("#edit-field-vendor-registrati-district").val();
                    if (addDistrict != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-sales-district").val(addDistrict);
                    }
                    var addCity = $("#edit-field-city-0-value").val();
                    if (addCity != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-city-0-value").val(addCity);
                    }
                    var addPincode = $("#edit-field-pin-code-0-value").val();
                    if (addPincode != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-pin-code-0-value").val(addPincode);
                    }
                    var addTnumber = $("#edit-field-telephone-number-0-value").val();
                    if (addTnumber != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-telephone-number-0-value").val(addTnumber);
                    }
                    var addMpnumber = $("#edit-field-mobile-pager-number-0-value").val();
                    if (addMpnumber != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-mobile-pager-number-0-value").val(addMpnumber);
                    }
                    var addFnumber = $("#edit-field-fax-number-0-value").val();
                    if (addFnumber != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-fax-number-0-value").val(addFnumber);
                    }
                    var addEmail = $("#edit-field-email-address-0-value").val();
                    if (addEmail != "") {
                        $("#edit-field-branch-sales-office-0-field-branch-email-address-0-value").val(addEmail);
                    }
                    /* var addJurisdictionPolice = $("#edit-field-jurisdiction-police-0-value").val();
                    if(addJurisdictionPolice != ""){
                        $("#edit-field-branch-sales-office-0-field-branch-jurisdiction-police-0-value").val(addJurisdictionPolice);
                    } */
                    var website = $("#edit-field-website-if-any-0-uri").val();
                    if (website != "") {
                        $("#edit-field-branch-sales-office-0-field-website-if-any-0-uri").val(website);
                    }

                } else {
                    $("#edit-field-branch-sales-office-0-field-branch-address-line-1-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-address-line-2-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-state-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-district-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-city-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-pin-code-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-telephone-number-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-mobile-pager-number-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-fax-number-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-email-address-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-branch-jurisdiction-police-0-value").val("");
                    $("#edit-field-branch-sales-office-0-field-website-if-any-0-uri").val("");
                }
            });
            $('#field-godown').prepend('<div class="chkBox sameAsAdd"><input type="checkbox" name="sameas" value="Yes" id="sameAsChkBoxGodown" /><label for="sameAsChkBoxGodown" class="chkBoxLbl" id="chkBoxLblGodown">Same as above</label></div>');
            $("#sameAsChkBoxGodown").click(function() {
                var attrVal = $(this).attr('checked');
                if (attrVal == "checked") {
                    var addLine1 = $("#edit-field-address-line-1-0-value").val();
                    if (addLine1 != "") {
                        $("#edit-field-godown-0-field-godown-address-line-1-0-value").val(addLine1);
                    }
                    var addLine2 = $("#edit-field-address-line-2-0-value").val();
                    if (addLine2 != "") {
                        $("#edit-field-godown-0-field-godown-address-line-2-0-value").val(addLine2);
                    }
                    var addState = $("#edit-field-vendor-registration-state").val();
                    if (addState != "") {
                        $("#edit-field-godown-0-field-godown-vendor-state").val(addState);
                    }
                    var addDistrict = $("#edit-field-vendor-registrati-district").val();
                    if (addDistrict != "") {
                        $("#edit-field-godown-0-field-vendor-godown-district").val(addDistrict);
                    }
                    var addCity = $("#edit-field-city-0-value").val();
                    if (addCity != "") {
                        $("#edit-field-godown-0-field-godown-city-0-value").val(addCity);
                    }
                    var addPincode = $("#edit-field-pin-code-0-value").val();
                    if (addPincode != "") {
                        $("#edit-field-godown-0-field-godown-pin-code-0-value").val(addPincode);
                    }
                    var addTnumber = $("#edit-field-telephone-number-0-value").val();
                    if (addTnumber != "") {
                        $("#edit-field-godown-0-field-godown-telephone-number-0-value").val(addTnumber);
                    }
                    var addMpnumber = $("#edit-field-mobile-pager-number-0-value").val();
                    if (addMpnumber != "") {
                        $("#edit-field-godown-0-field-godown-mobile-pager-number-0-value").val(addMpnumber);
                    }
                    var addFnumber = $("#edit-field-fax-number-0-value").val();
                    if (addFnumber != "") {
                        $("#edit-field-godown-0-field-godown-fax-number-0-value").val(addFnumber);
                    }
                    var addEmail = $("#edit-field-email-address-0-value").val();
                    if (addEmail != "") {
                        $("#edit-field-godown-0-field-godown-email-address-0-value").val(addEmail);
                    }
                    var addJurisdictionPolice = $("#edit-field-jurisdiction-police-0-value").val();
                    if (addJurisdictionPolice != "") {
                        $("#edit-field-godown-0-field-godown-jurisdiction-police-0-value").val(addJurisdictionPolice);
                    }

                } else {
                    $("#edit-field-godown-0-field-godown-address-line-1-0-value").val("");
                    $("#edit-field-godown-0-field-godown-address-line-2-0-value").val("");
                    $("#edit-field-godown-0-field-godown-vendor-state").val("");
                    $("#edit-field-godown-0-field-vendor-godown-district").val("");
                    $("#edit-field-godown-0-field-godown-city-0-value").val("");
                    $("#edit-field-godown-0-field-godown-pin-code-0-value").val("");
                    $("#edit-field-godown-0-field-godown-telephone-number-0-value").val("");
                    $("#edit-field-godown-0-field-godown-mobile-pager-number-0-value").val("");
                    $("#edit-field-godown-0-field-godown-fax-number-0-value").val("");
                    $("#edit-field-godown-0-field-godown-email-address-0-value").val("");
                    $("#edit-field-godown-0-field-godown-jurisdiction-police-0-value").val("");
                }
            });
            $('#field-factory').prepend('<div class="chkBox sameAsAdd"><input type="checkbox" name="sameas" value="Yes" id="sameAsChkBoxFactory" /><label for="sameAsChkBoxFactory" class="chkBoxLbl" id="chkBoxLblFactory">Same as above</label></div>');
            $("#sameAsChkBoxFactory").click(function() {
                var attrVal = $(this).attr('checked');
                if (attrVal == "checked") {
                    var addLine1 = $("#edit-field-address-line-1-0-value").val();
                    if (addLine1 != "") {
                        $("#edit-field-factory-0-field-factory-address-line-1-0-value").val(addLine1);
                    }
                    var addLine2 = $("#edit-field-address-line-2-0-value").val();
                    if (addLine2 != "") {
                        $("#edit-field-factory-0-field-factory-address-line-2-0-value").val(addLine2);
                    }
                    var addState = $("#edit-field-vendor-registration-state").val();
                    if (addState != "") {
                        $("#edit-field-factory-0-field-factory-vendor-state").val(addState);
                    }
                    var addDistrict = $("#edit-field-vendor-registrati-district").val();
                    if (addDistrict != "") {
                        $("#edit-field-factory-0-field-factory-vendor-district").val(addDistrict);
                    }
                    var addCity = $("#edit-field-city-0-value").val();
                    if (addCity != "") {
                        $("#edit-field-factory-0-field-factory-city-0-value").val(addCity);
                    }
                    var addPincode = $("#edit-field-pin-code-0-value").val();
                    if (addPincode != "") {
                        $("#edit-field-factory-0-field-factory-pin-code-0-value").val(addPincode);
                    }
                    var addTnumber = $("#edit-field-telephone-number-0-value").val();
                    if (addTnumber != "") {
                        $("#edit-field-factory-0-field-factory-telephone-number-0-value").val(addTnumber);
                    }
                    var addMpnumber = $("#edit-field-mobile-pager-number-0-value").val();
                    if (addMpnumber != "") {
                        $("#edit-field-factory-0-field-factory-mobile-number-0-value").val(addMpnumber);
                    }
                    var addFnumber = $("#edit-field-fax-number-0-value").val();
                    if (addFnumber != "") {
                        $("#edit-field-factory-0-field-factory-fax-number-0-value").val(addFnumber);
                    }
                    var addEmail = $("#edit-field-email-address-0-value").val();
                    if (addEmail != "") {
                        $("#edit-field-factory-0-field-factory-email-address-0-value").val(addEmail);
                    }
                    var addJurisdictionPolice = $("#edit-field-jurisdiction-police-0-value").val();
                    if (addJurisdictionPolice != "") {
                        $("#edit-field-factory-0-field-factory-jurisdiction-0-value").val(addJurisdictionPolice);
                    }

                } else {
                    $("#edit-field-factory-0-field-factory-address-line-1-0-value").val("");
                    $("#edit-field-factory-0-field-factory-address-line-2-0-value").val("");
                    $("#edit-field-factory-0-field-factory-vendor-state").val("");
                    $("#edit-field-factory-0-field-factory-vendor-district").val("");
                    $("#edit-field-factory-0-field-factory-city-0-value").val("");
                    $("#edit-field-factory-0-field-factory-pin-code-0-value").val("");
                    $("#edit-field-factory-0-field-factory-telephone-number-0-value").val("");
                    $("#edit-field-factory-0-field-factory-mobile-number-0-value").val("");
                    $("#edit-field-factory-0-field-factory-fax-number-0-valuee").val("");
                    $("#edit-field-factory-0-field-factory-email-address-0-value").val("");
                    $("#edit-field-factory-0-field-factory-jurisdiction-0-value").val("");
                }
            });
            $.validator.addMethod("ifsc", function(value, element) {
                var reg = /^[A-Z]{4}0[A-Z0-9]{6,7}$/;
                if (this.optional(element)) {
                    //console.log(value);
                    //console.log(element);
                    return true;
                }
                if (value.match(reg)) {
                    return true;
                } else {
                    return false;
                }
            }, "Please specify a valid IFSC CODE");

            $.validator.addMethod("alphanumeric", function(value, element) {
                return this.optional(element) || /^[\w. ]+$/i.test(value);
            }, "Please enter only letters and numbers.");

            $.validator.addMethod("lettersonly", function(value, element) {
                return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
            }, "Please enter letters only.");

            $.validator.addMethod("letterswithcommadash", function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9 ,-.]+$/i.test(value);
            }, "Please enter only letters, comma and dash.");
            $.validator.addMethod("pannumber", function(value, element) {
                return this.optional(element) || /^[A-Z0-9]+$/.test(value);
            }, "Please enter only capital letters and digits without space.");


            var dataDrupalSelector = $("#node-vendor-registration-form input[id='edit-back-button'], #node-vendor-registration-edit-form input[id='edit-back-button']").attr('data-drupal-selector');
            if (dataDrupalSelector == "edit-back-button") {
                $("#node-vendor-registration-form input[id='edit-back-button'], #node-vendor-registration-edit-form input[id='edit-back-button']").addClass('cancel');
            }
            //$("#node-vendor-registration-form input[id='edit-back-button'], #node-vendor-registration-edit-form input[id='edit-back-button']").validate().settings.ignore = "cancel";


            $("#node-vendor-registration-form, #node-vendor-registration-edit-form").validate({

                rules: {

                    'title': {
                        required: true
                    },
                    'field_email_address[0][value]': {
                        email: true
                    },
                    'field_pin_code[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_godown[0][field_godown_pin_code][0][value]': {
                        required: true,
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_factory[0][field_factory_pin_code][0][value]': {
                        required: true,
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_branch_sales_office[0][field_branch_pin_code][0][value]': {
                        required: true,
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_mobile_pager_number[0][value]': {
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_branch_sales_office[0][field_branch_mobile_pager_number][0][value]': {
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_godown[0][field_godown_mobile_pager_number][0][value]': {
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_factory[0][field_factory_mobile_number][0][value]': {
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_banker_account_number[0][value]': {
                        number: true,
                        rangelength: [6, 20]
                    },
                    'field_banker_ifsc_code[0][value]': {
                        rangelength: [11, 11],
                        ifsc: true
                    },
                    'field_income_tax_registration_no[0][value]': {
                        pannumber: true,
                        required: true,
                        rangelength: [10, 10]
                    },
                    'field_text_gstin[0][value]': {
                        alphanumeric: true,
                        required: true
                    },
                    'field_sales_registration_number[0][value]': {
                        alphanumeric: true,
                        required: true
                    },
                    'field_registration_number_indust[0][value]': {
                        alphanumeric: true,
                        required: true
                    },
                    'field_registration_number_indust[0][value]': {
                        alphanumeric: true,
                        required: true
                    },
                    'field_registration_id_with_cpp_p[0][value]': {
                        alphanumeric: true
                    },
                    'field_address_line_1[0][value]': {
                        letterswithcommadash: true,
                        required: true
                    },
                    'field_address_line_2[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_city[0][value]': {
                        lettersonly: true,
                        required: true
                    },
                    'field_telephone_number[0][value]': {
                        number: true,
                        rangelength: [0, 15]
                    },
                    'field_mobile_pager_number[0][value]': {
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_fax_number[0][value]': {
                        number: true,
                        rangelength: [0, 15]
                    },
                    'field_branch_sales_office[0][field_branch_address_line_1][0][value]': {
                        letterswithcommadash: true,
                        required: true
                    },
                    'field_branch_sales_office[0][field_branch_address_line_2][0][value]': {
                        letterswithcommadash: true
                    },
                    'field_branch_sales_office[0][field_branch_city][0][value]': {
                        lettersonly: true,
                        required: true
                    },
                    'field_branch_sales_office[0][field_branch_telephone_number][0][value]': {
                        number: true,
                        rangelength: [0, 15]
                    },
                    'field_branch_sales_office[0][field_branch_mobile_pager_number][0][value]': {
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_branch_sales_office[0][field_branch_fax_number][0][value]': {
                        number: true,
                        rangelength: [0, 15]
                    },
                    'field_jurisdiction_of_police_ver[0][value]': {
                        lettersonly: true,
                        required: true
                    },
                    'field_address_of_the_police_head[0][value]': {
                        letterswithcommadash: true,
                        required: true
                    },
                    'field_services_for_which_registr[0][value]': {
                        lettersonly: true
                    },
                    'field_distributor_dealership[0][field_article_name][0][value]': {
                        lettersonly: true
                    },
                    'field_distributor_dealership[0][field_extent_of_stock][0][value]': {
                        alphanumeric: true
                    },
                    'field_distributor_dealership[0][field_types_of_stores][0][value]': {
                        lettersonly: true
                    },
                    'field_distributor_dealership[0][field_indigenous_stocked_article][0][value]': {
                        alphanumeric: true
                    },
                    'field_distributor_dealership[0][field_name_of_manufacturers][0][value]': {
                        lettersonly: true
                    },
                    'field_managing_name[0][value]': {
                        lettersonly: true
                    },
                    'field_managing_address_line_1[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_managing_address_line_2[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_managing_city[0][value]': {
                        lettersonly: true
                    },
                    'field_managing_pin_code[0][value]': {
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_proprietor_name[0][value]': {
                        lettersonly: true
                    },
                    'field_proprietor_address_line_1[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_proprietor_address_line_2[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_proprietor_city[0][value]': {
                        lettersonly: true
                    },
                    'field_proprietor_pin_code[0][value]': {
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_partnership[0][field_partner_name][0][value]': {
                        lettersonly: true
                    },
                    'field_partnership[0][field_partner_address_line_1][0][value]': {
                        letterswithcommadash: true
                    },
                    'field_partnership[0][field_partner_address_line_2][0][value]': {
                        letterswithcommadash: true
                    },
                    'field_partnership[0][field_partner_city][0][value]': {
                        lettersonly: true
                    },
                    'field_partnership[0][field_partner_pin_code][0][value]': {
                        number: true,
                        rangelength: [6, 6]
                    },
                    'field_others_ownership[0][value]': {
                        lettersonly: true
                    },
                    'field_contact_persons[0][field_contact_name][0][value]': {
                        lettersonly: true,
                        required: true
                    },
                    'field_contact_persons[0][field_contact_designation][0][value]': {
                        lettersonly: true,
                        required: true
                    },
                    'field_contact_persons[0][field_contact_phone][0][value]': {
                        number: true,
                        rangelength: [0, 15]
                    },
                    'field_contact_persons[0][field_fax_no][0][value]': {
                        number: true,
                        rangelength: [0, 15]
                    },
                    'field_contact_persons[0][field_mobile_no][0][value]': {
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_references_registered[0][field_registered_with][0][value]': {
                        alphanumeric: true
                    },
                    'field_list_of_principal_customer[0][field_principal_customers_name][0][value]': {
                        lettersonly: true
                    },
                    'field_list_of_principal_customer[0][field_principal_address][0][value]': {
                        letterswithcommadash: true
                    },
                    'field_principal_s_authorization_[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_banker_address_line_1[0][value]': {
                        lettersonly: true
                    },
                    'field_banker_address_line_2[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_banker_city[0][value]': {
                        lettersonly: true
                    },
                    'field_preceding_three_years[0][field_preceding_three_year][0][value]': {
                        number: true
                    },
                    'field_brief_description_of_the[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_provide_details_of_service[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_skilled_unskilled[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_the_min_requirements[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_details_of_facilities_avai[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_products_manufactured[0][field_description][0][value]': {
                        letterswithcommadash: true
                    },
                    'field_spare_capacity_available[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_product_under_development[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_year_of_commencement_of_ma[0][value]': {
                        alphanumeric: true
                    },
                    'field_indicate_industrial_licenc[0][value]': {
                        alphanumeric: true
                    },
                    'field_product_quantity_licensed[0][value]': {
                        alphanumeric: true
                    },
                    'field_products_manufactured[0][field_year][0][value]': {
                        number: true
                    },
                    'field_products_manufactured[0][field_annual_production][0][value]': {
                        lettersonly: true
                    },
                    'field_present_monthly_production[0][value]': {
                        alphanumeric: true
                    },
                    'field_raw_materials[0][field_raw_name][0][value]': {
                        lettersonly: true
                    },
                    'field_raw_materials[0][field_sources_of_procurement][0][value]': {
                        alphanumeric: true
                    },
                    'field_raw_materials[0][field_percentage_of_indigenous][0][value]': {
                        alphanumeric: true
                    },
                    'field_details_of_intellectual_pr[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_details_of_plants[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_inward_goods_inspection_an[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_available_test_equipment[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_assistance_from_external_a[0][field_description_of_the_test][0][value]': {
                        alphanumeric: true
                    },
                    'field_assistance_from_external_a[0][field_name_of_the_agency_carryin][0][value]': {
                        lettersonly: true
                    },
                    'field_expansion_programme[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_research_programme[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_any_other_information_you[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_environment_pollution_clea[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_measures_taken_for_securit[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_quality_management_system_[0][value]': {
                        letterswithcommadash: true
                    },
                    'field_tracking_id[0][value]': {
                        alphanumeric: true
                    },
                    'field_service_name[0][value]': {
                        lettersonly: true
                    },
                    'captcha_response': {
                        required: true
                    }
                },
                ignore: ".form-date",
                messages: {
                    'title': {
                        required: 'Please Enter Name'
                    },
                    'field_email_address[0][value]': {
                        email: 'Please enter valid email'
                    },
                    'field_pin_code[0][value]': {
                        required: 'Please enter valid pincode',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 6 digits'
                    },
                    'field_telephone_number[0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum 15 digits'
                    },
                    'field_fax_number[0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum 15 digits'
                    },
                    'field_branch_sales_office[0][field_branch_telephone_number][0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum 15 digits'
                    },
                    'field_branch_sales_office[0][field_branch_fax_number][0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum 15 digits'
                    },
                    'field_contact_persons[0][field_contact_phone][0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum 15 digits'
                    },
                    'field_contact_persons[0][field_fax_no][0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum 15 digits'
                    },
                    'field_godown[0][field_godown_pin_code][0][value]': {
                        required: 'Please enter valid pincode',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 6 digits'
                    },
                    'field_factory[0][field_factory_pin_code][0][value]': {
                        required: 'Please enter valid pincode',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 6 digits'
                    },
                    'field_branch_sales_office[0][field_branch_pin_code][0][value]': {
                        required: 'Please enter valid pincode',
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 6 digits'
                    },
                    'field_mobile_pager_number[0][value]': {

                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_branch_sales_office[0][field_branch_mobile_pager_number][0][value]': {

                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_godown[0][field_godown_mobile_pager_number][0][value]': {

                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_factory[0][field_factory_mobile_number][0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum and minimum 10 digits'
                    },
                    'field_banker_account_number[0][value]': {
                        number: 'Please enter only digits value',
                        rangelength: 'Please enter maximum 20 and minimum 6 digits'
                    },
                    'field_banker_ifsc_code[0][value]': {
                        alphanumeric: 'Please enter only digits value',
                        rangelength: 'Please enter only 11 letters along with number'
                    },
                    'captcha_response': {
                        required: 'Please Enter text showing in the Image',
                    }
                },
                submitHandler: function(form) {
                    form.submit()
                }

            });



            $("select[name='field_history_of_banning_de_regi']").change(function() {
                //console.log($(this).val());
                if ($(this).val() == "Yes") {
                    $(".form-item-field-history-undertaking-form-0").find('label').addClass('form-required');
                    $("#edit-field-history-undertaking-form-0-upload").attr('required', 'required');
                    $(".form-item-field-upload-undertaking-form-0").find('label').removeClass('form-required');
                    $("#edit-field-upload-undertaking-form-0-upload").removeAttr('required', 'required');
                } else if ($(this).val() == "No") {
                    $(".form-item-field-upload-undertaking-form-0").find('label').addClass('form-required');
                    $("#edit-field-upload-undertaking-form-0-upload").attr('required', 'required');
                    $(".form-item-field-history-undertaking-form-0").find('label').removeClass('form-required');
                    $("#edit-field-history-undertaking-form-0-upload").removeAttr('required', 'required');
                } else {
                    $(".form-item-field-history-undertaking-form-0").find('label').removeClass('form-required');
                    $("#edit-field-history-undertaking-form-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-upload-undertaking-form-0").find('label').removeClass('form-required');
                    $("#edit-field-upload-undertaking-form-0-upload").removeAttr('required', 'required');
                }
            });

            $("select[name='field_history_of_any_labour_disp']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-history-undertaking-form-n-0").find('label').addClass('form-required');
                    $("#edit-field-history-undertaking-form-n-0-upload").attr('required', 'required');
                    $(".form-item-field-history-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-history-undertaking-form-y-0-upload").removeAttr('required', 'required');
                } else if ($(this).val() == "No") {
                    $(".form-item-field-history-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-history-undertaking-form-n-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-history-undertaking-form-y-0").find('label').addClass('form-required');
                    $("#edit-field-history-undertaking-form-y-0-upload").attr('required', 'required');
                } else {
                    $(".form-item-field-history-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-history-undertaking-form-n-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-history-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-history-undertaking-form-y-0-upload").removeAttr('required', 'required');
                }
            });

            $("select[name='field_is_any_owner_employee_of_y']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-owner-undertaking-form-n-0").find('label').addClass('form-required');
                    $("#edit-field-owner-undertaking-form-n-0-upload").attr('required', 'required');
                    $(".form-item-field-owner-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-owner-undertaking-form-y-0-upload").removeAttr('required', 'required');
                } else if ($(this).val() == "No") {
                    $(".form-item-field-owner-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-owner-undertaking-form-n-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-owner-undertaking-form-y-0").find('label').addClass('form-required');
                    $("#edit-field-owner-undertaking-form-y-0-upload").attr('required', 'required');
                } else {
                    $(".form-item-field-owner-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-owner-undertaking-form-n-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-owner-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-owner-undertaking-form-y-0-upload").removeAttr('required', 'required');
                }
            });

            $("select[name='field_any_ongoing_enquiries_agai']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-ongoing-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-ongoing-undertaking-form-y-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-ongoing-undertaking-form-n-0").find('label').addClass('form-required');
                    $("#edit-field-ongoing-undertaking-form-n-0-upload").attr('required', 'required');

                } else if ($(this).val() == "No") {
                    $(".form-item-field-ongoing-undertaking-form-y-0").find('label').addClass('form-required');
                    $("#edit-field-ongoing-undertaking-form-y-0-upload").attr('required', 'required');
                    $(".form-item-field-ongoing-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-ongoing-undertaking-form-n-0-upload").removeAttr('required', 'required');
                } else {
                    $(".form-item-field-ongoing-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-ongoing-undertaking-form-y-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-ongoing-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-ongoing-undertaking-form-n-0-upload").removeAttr('required', 'required');
                }
            });

            $("select[name='field_whether_you_or_any_of_your']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-partner-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-partner-undertaking-form-y-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-partner-undertaking-form-n-0").find('label').addClass('form-required');
                    $("#edit-field-partner-undertaking-form-n-0-upload").attr('required', 'required');
                } else if ($(this).val() == "No") {
                    $(".form-item-field-partner-undertaking-form-y-0").find('label').addClass('form-required');
                    $("#edit-field-partner-undertaking-form-y-0-upload").attr('required', 'required');
                    $(".form-item-field-partner-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-partner-undertaking-form-n-0-upload").removeAttr('required', 'required');
                } else {
                    $(".form-item-field-partner-undertaking-form-n-0").find('label').removeClass('form-required');
                    $("#edit-field-partner-undertaking-form-n-0-upload").removeAttr('required', 'required');
                    $(".form-item-field-partner-undertaking-form-y-0").find('label').removeClass('form-required');
                    $("#edit-field-partner-undertaking-form-y-0-upload").removeAttr('required', 'required');
                }
            });

            $("select[name='field_stores_for_which_registrat[]']").change(function() {
                if ($(this).val() == "685") {


                    $(".form-item-field-other-stores-for-which-reg-0-value").find('label').addClass('form-required');
                    $("#edit-field-other-stores-for-which-reg-0-value").attr('required', 'required');
                } else {
                    $(".form-item-field-other-stores-for-which-reg-0-value").find('label').removeClass('form-required');
                    $("#edit-field-other-stores-for-which-reg-0-value").removeAttr('required', 'required');
                }


            });


            $("select[name='field_kind_of_ownership']").change(function() {
                //console.log($(this).val());
                //45 - Limited concern
                if ($(this).val() == '45') {
                    //console.log("--ADDED--");
                    $(".form-item-field-managing-name-0-value").find('label').addClass('form-required');
                    $("#edit-field-managing-name-0-value").attr('required', 'required');

                    $(".form-item-field-managing-address-line-1-0-value").find('label').addClass('form-required');
                    $("#edit-field-managing-address-line-1-0-value").attr('required', 'required');

                    $(".form-item-field-managing-address-line-2-0-value").find('label').addClass('form-required');
                    $("#edit-field-managing-address-line-2-0-value").attr('required', 'required');

                    $(".form-item-field-vendor-state-details").find('label').addClass('form-required');
                    $("#edit-field-vendor-state-details").attr('required', 'required');

                    $(".form-item-field-vendor-district-kind-two").find('label').addClass('form-required');
                    $("#edit-field-vendor-district-kind-two").attr('required', 'required');

                    $(".form-item-field-managing-city-0-value").find('label').addClass('form-required');
                    $("#edit-field-managing-city-0-value").attr('required', 'required');

                    $(".form-item-field-enclose-copy-of-moa-and-ao-0").find('label').addClass('form-required');
                    $("#edit-field-enclose-copy-of-moa-and-ao-0--label").attr('required', 'required');
                } else {
                    $(".form-item-field-managing-name-0-value").find('label').removeClass('form-required');
                    $("#edit-field-managing-name-0-value").removeAttr('required', 'required');

                    $(".form-item-field-managing-address-line-1-0-value").find('label').removeClass('form-required');
                    $("#edit-field-managing-address-line-1-0-value").removeAttr('required', 'required');

                    $(".form-item-field-managing-address-line-2-0-value").find('label').removeClass('form-required');
                    $("#edit-field-managing-address-line-2-0-value").removeAttr('required', 'required');

                    $(".form-item-field-vendor-state-details").find('label').removeClass('form-required');
                    $("#edit-field-vendor-state-details").removeAttr('required', 'required');

                    $(".form-item-field-vendor-district-kind-two").find('label').removeClass('form-required');
                    $("#edit-field-vendor-district-kind-two").removeAttr('required', 'required');

                    $(".form-item-field-managing-city-0-value").find('label').removeClass('form-required');
                    $("#edit-field-managing-city-0-value").removeAttr('required', 'required');

                    $(".form-item-field-enclose-copy-of-moa-and-ao-0").find('label').removeClass('form-required');
                    $("#edit-field-enclose-copy-of-moa-and-ao-0--label").removeAttr('required', 'required');
                }
                //46 - Single Owner
                if ($(this).val() == '46') {
                    //console.log("--ADDED--");
                    $(".form-item-field-proprietor-name-0-value").find('label').addClass('form-required');
                    $("#edit-field-proprietor-name-0-value").attr('required', 'required');

                    $(".form-item-field-proprietor-address-line-1-0-value").find('label').addClass('form-required');
                    $("#edit-field-proprietor-address-line-1-0-value").attr('required', 'required');

                    $(".form-item-field-proprietor-pin-code-0-value").find('label').addClass('form-required');
                    $("#edit-field-proprietor-pin-code-0-value").attr('required', 'required');

                    $(".form-item-field-vendor-state-pd").find('label').addClass('form-required');
                    $("#edit-field-vendor-state-pd").attr('required', 'required');

                    $(".form-item-field-vendor-district-kind-three").find('label').addClass('form-required');
                    $("#edit-field-vendor-district-kind-three").attr('required', 'required');

                    $(".form-item-field-proprietor-city-0-value").find('label').addClass('form-required');
                    $("#edit-field-proprietor-city-0-value").attr('required', 'required');
                } else {
                    $(".form-item-field-proprietor-name-0-value").find('label').removeClass('form-required');
                    $("#edit-field-proprietor-name-0-value").removeAttr('required', 'required');

                    $(".form-item-field-proprietor-address-line-1-0-value").find('label').removeClass('form-required');
                    $("#edit-field-proprietor-address-line-1-0-value").removeAttr('required', 'required');

                    $(".form-item-field-proprietor-pin-code-0-value").find('label').removeClass('form-required');
                    $("#edit-field-proprietor-pin-code-0-value").removeAttr('required', 'required');

                    $(".form-item-field-vendor-state-pd").find('label').removeClass('form-required');
                    $("#edit-field-vendor-state-pd").removeAttr('required', 'required');

                    $(".form-item-field-vendor-district-kind-three").find('label').removeClass('form-required');
                    $("#edit-field-vendor-district-kind-three").removeAttr('required', 'required');

                    $(".form-item-field-proprietor-city-0-value").find('label').removeClass('form-required');
                    $("#edit-field-proprietor-city-0-value").removeAttr('required', 'required');
                }
                //47 - Partnership
                if ($(this).val() == '47') {
                    //console.log("--ADDED--");
                    $(".form-item-field-partnership-0-field-partner-name-0-value").find('label').addClass('form-required');
                    $("#edit-field-partnership-0-field-partner-name-0-value").attr('required', 'required');

                    $(".form-item-field-partnership-0-field-partner-address-line-1-0-value").find('label').addClass('form-required');
                    $("#edit-field-partnership-0-field-partner-address-line-1-0-value").attr('required', 'required');

                    $(".form-item-field-partnership-0-field-partner-city-0-value").find('label').addClass('form-required');
                    $("#edit-field-partnership-0-field-partner-city-0-value").attr('required', 'required');

                    $(".form-item-field-partnership-0-field-vendor-partnershi-state").find('label').addClass('form-required');
                    $("#edit-field-partnership-0-field-vendor-partnershi-state").attr('required', 'required');

                    $(".form-item-ield-partnership-0-field-partnership-district").find('label').addClass('form-required');
                    $("#edit-field-partnership-0-field-partnership-district").attr('required', 'required');

                    $(".form-item-field-partnership-0-field-partner-pin-code-0-value").find('label').addClass('form-required');
                    $("#edit-field-partnership-0-field-partner-pin-code-0-value").attr('required', 'required');
                } else {
                    $(".form-item-field-partnership-0-field-partner-name-0-value").find('label').removeClass('form-required');
                    $("#edit-field-partnership-0-field-partner-name-0-value").removeAttr('required', 'required');

                    $(".form-item-field-partnership-0-field-partner-address-line-1-0-value").find('label').removeClass('form-required');
                    $("#edit-field-partnership-0-field-partner-address-line-1-0-value").removeAttr('required', 'required');

                    $(".form-item-field-partnership-0-field-partner-city-0-value").find('label').removeClass('form-required');
                    $("#edit-field-partnership-0-field-partner-city-0-value").removeAttr('required', 'required');

                    $(".form-item-field-partnership-0-field-vendor-partnershi-state").find('label').removeClass('form-required');
                    $("#edit-field-partnership-0-field-vendor-partnershi-state").removeAttr('required', 'required');

                    $(".form-item-ield-partnership-0-field-partnership-district").find('label').removeClass('form-required');
                    $("#edit-field-partnership-0-field-partnership-district").removeAttr('required', 'required');

                    $(".form-item-field-partnership-0-field-partner-pin-code-0-value").find('label').removeClass('form-required');
                    $("#edit-field-partnership-0-field-partner-pin-code-0-value").removeAttr('required', 'required');
                }
                //48 - Other
                if ($(this).val() == '48') {
                    //console.log("--ADDED--");
                    $(".form-item-field-others-ownership-0-value").find('label').addClass('form-required');
                    $("#edit-field-others-ownership-0-value").attr('required', 'required');
                } else {
                    $(".form-item-field-others-ownership-0-value").find('label').removeClass('form-required');
                    $("#edit-field-others-ownership-0-value").removeAttr('required', 'required');
                }



            });

            $("select#edit-field-vendor-registration-state").change(function() {
                var base_url = $('input#base_url').val();
                if ($(this).val() != "") {
                    var ajaxLink = base_url + 'get-district-value/' + $(this).val();
                    console.log(ajaxLink);
                    var resultd = "";
                    $.ajax({
                        url: ajaxLink,
                        success: function(result) {
                            $(".field--name-field-vendor-registrati-district").hide();
                            $(".field--name-field-vendor-registrati-district").append("<div class='ajaxCalling'>Loading..</div>");
                            $(".field--name-field-vendor-registrati-district select#edit-field-vendor-registrati-district").html(result);
                            $(".field--name-field-vendor-registrati-district div.ajaxCalling").remove();
                            $(".field--name-field-vendor-registrati-district").show();
                        }
                    });
                }
            });
            //$("select.select_field_branch_sales_office_state").each(function(index1){			 
            $("select.select_field_branch_sales_office_state").change(function() {
                var targetDistrictClass = $(this).attr('data-target-district');
                console.log(targetDistrictClass);
                var base_url = $('input#base_url').val();
                if ($(this).val() != "") {
                    var ajaxLink = base_url + 'get-district-value/' + $(this).val();
                    console.log(ajaxLink);
                    console.log("." + targetDistrictClass);
                    var resultd = "";
                    $.ajax({
                        url: ajaxLink,
                        success: function(result) {
                            $("." + targetDistrictClass).html(result);
                        }
                    });
                }

            });

            //});
            $("select[name='field_bank_name']").change(function() {
                if ($(this).val() == "680") {
                    $(".form-item-field-other-bank-name-0-value").find('label').addClass('form-required');
                    $("#edit-field-other-bank-name-0-value").attr('required', 'required');
                } else {
                    $(".form-item-field-other-bank-name-0-value").find('label').removeClass('form-required');
                    $("#edit-field-other-bank-name-0-value").removeAttr('required', 'required');
                }
            });
            $("select[name='field_indian_companies']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-memorandum-article-0").find('label').addClass('form-required');
                    $("input[name='files[field_memorandum_article_0]']").attr('required', 'required');
                } else {
                    $(".form-item-field-memorandum-article-0").find('label').removeClass('form-required');
                    $("input[name='files[field_memorandum_article_0]']").removeAttr('required', 'required');
                }
            });
            $("select[name='field_indian_partnership_act']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-memorandum-article-1932-0").find('label').addClass('form-required');
                    $("input[name='files[field_memorandum_article_1932_0]']").attr('required', 'required');
                } else {
                    $(".form-item-field-memorandum-article-1932-0").find('label').removeClass('form-required');
                    $("input[name='files[field_memorandum_article_1932_0]']").removeAttr('required', 'required');
                }
            });
            $("select[name='field_indian_factories_act_1950']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-registration-number-0-value").find('label').addClass('form-required');
                    $("input[name='field_registration_number[0][value]']").attr('required', 'required');
                    $(".field--name-field-registration-date").find('h4').addClass('form-required');
                    $("input[name='field_registration_date[0][value][date]']").attr('required', 'required');
                } else {
                    $(".form-item-field-registration-number-0-value").find('label').removeClass('form-required');
                    $("input[name='field_registration_number[0][value]']").removeAttr('required', 'required');
                    $(".field--name-field-registration-date").find('h4').removeClass('form-required');
                    $("input[name='field_registration_date[0][value][date]']").removeAttr('required', 'required');
                }
            });
            $("select[name='field_any_other_act']").change(function() {
                if ($(this).val() == "Yes") {
                    $(".form-item-field-memorandum-article-other-0").find('label').addClass('form-required');
                    $("input[name='files[field_memorandum_article_other_0]']").attr('required', 'required');
                    $(".form-item-field-please-specify-0-value").find('label').addClass('form-required');
                    $("input[name='field_please_specify[0][value]']").attr('required', 'required');
                } else {
                    $(".form-item-field-memorandum-article-other-0").find('label').removeClass('form-required');
                    $("input[name='files[field_memorandum_article_other_0]']").removeAttr('required', 'required');
                    $(".form-item-field-please-specify-0-value").find('label').removeClass('form-required');
                    $("input[name='field_please_specify[0][value]']").removeAttr('required', 'required');
                }
            });
        }


        if ($('body').hasClass('page-user') && $("form#user-register-form").length) {

            $("input[name='pass[pass1]']").attr('autocomplete', 'off');
            $("input[name='pass[pass2]']").attr('autocomplete', 'off');

            $.validator.addMethod("lettersonly", function(value, element) {
                return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
            }, "Please enter letters only.");
            $.validator.addMethod("letterwithcharsonly", function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9-_]+$/i.test(value);
            }, "Please enter characters, digits, dash(-) and underscore(_) are allowed.");
            $.validator.addMethod("pannumber", function(value, element) {
                return this.optional(element) || /^[A-Z0-9]+$/.test(value);
            }, "Please enter only capital letters and digits without space.");

            $("form#user-register-form").validate({
                rules: {
                    'field_name_of_the_firm[0][value]': {
                        required: true,
                        lettersonly: true
                    },
                    'mail': {
                        email: true,
                        required: true
                    },
                    'name': {
                        required: true,
                        letterwithcharsonly: true
                    },
                    'pass[pass1]': {
                        required: true
                    },
                    'pass[pass2]': {
                        required: true
                    },
                    'field_pan_no[0][value]': {
                        pannumber: true,
                        required: true,
                        rangelength: [10, 10]
                    },
                    'field_mobile_number[0][value]': {
                        required: true,
                        number: true,
                        rangelength: [10, 10]
                    },
                    'field_landline[0][value]': {
                        number: true,
                        rangelength: [0, 15]
                    },
                    'files[field_pan_card_image_0]': {
                        required: true,
                        accept: "jpg,png,jpeg"
                    },
                },
                //ignore : ".form-file",
                messages: {
                    'field_name_of_the_firm[0][value]': {
                        lettersonly: 'Please enter valid Name of the firm'
                    },
                    'mail': {
                        email: 'Please enter valid Email address'
                    },
                    'field_pan_no[0][value]': {
                        number: 'Please enter valid PAN No.'
                    },
                    'field_mobile_number[0][value]': {
                        number: 'Please enter valid Mobile No.'
                    },
                    'field_landline[0][value]': {
                        number: 'Please enter valid Landline No.',
                        rangelength: 'Please enter maximum 15 digits'
                    },
                    'files[field_pan_card_image_0]': {
                        required: "Please Select PAN Card Image",
                        accept: "Only image type jpg/png/jpeg is allowed"
                    },

                },
                submitHandler: function(form) {
                    form.submit()
                }
            });
        }

        $(".socialFeed li:nth-child(2) a").click(function() {
            //$('.twitterFeed').append('<a class="twitter-timeline" href="https://twitter.com/DRDO_India?ref_src=twsrc%5Etfw" data-dnt="true"data-tweet-limit=3 data-chrome="noheader nofooter noborders">&nbsp;</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
        });

        $(".socialFeed li:nth-child(3) a").click(function() {
            $('.facebookFeed').append('<script async defer crossorigin="anonymous"src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2"></script><div class="fb-page" data-href="https://www.facebook.com/DPIDRDO/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/DPIDRDO/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/DPIDRDO/">DRDO</a></blockquote>');
        });



        //Set Element to vertical center using padding
        $.fn.verticalAlign = function() {
            return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');
        };
        //$("#myVideo").trigger('pause');
        setTimeout(function() {
            $("#myVideo").trigger('play');
        }, 5000);

        if ($(".subSiteHomeBannerSlider").length) {
            $('body').addClass("micrositeHome")
        }
        if ($("body").hasClass('page-user')) {
            var base_url = $('#base_url').val();
            if ($("form.user-login-form").length) {
                $("input[name='hiddenText']").val(base_url);
            }
        }
        if ($('body').hasClass('page-user')) {
            var base_url = $('#base_url').val();
            var encryptUrl = base_url + 'encrypt/jencrypt';
            $("form#user-login-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
            $("form#user-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
            $("form#user-pass").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });
        }
        /*if ($("body").hasClass('page-user')) {
            var base_url = $('#base_url').val();
            if ($("form.user-register-form").length) {
                $("input[name='hiddenText']").val(base_url);
            }
        }
        if ($('body').hasClass('page-user')) {
            var base_url = $('#base_url').val();
            var encryptUrl = base_url + 'encrypt/jencrypt';
            $("form#user-register-form").jCryption({
                getKeysURL: encryptUrl + "?getPublicKey=true",
                handshakeURL: encryptUrl + "?handshake=true"
            });

        }*/
        //On scroll header fixed
        /*$(window).scroll(function(){
        	var scrollTop = $(window).scrollTop();	
        	if( scrollTop >= 200){
        		$('body').addClass('headerScroll');
        	}else {
        		$('body').removeClass('headerScroll');
        	}
        });*/
        //On scroll header fixed
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop >= 20) {
                $('body').addClass('topStripScroll');
            } else {
                $('body').removeClass('topStripScroll');
            }
        });
        // Home Banner
        if ($(".homeBannerSlider .swiper-slide").length > 1) {
            $(".homeBannerSlider .swiper-button-next, .homeBannerSlider .swiper-button-prev").addClass("active");
            var homeBannerSlider = new Swiper('.homeBannerSlider .swiper-container', {
                pagination: false,
                paginationClickable: true,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                //autoHeight:true,
                effect: 'fade',
                simulateTouch: false,
                autoplay: {
                    delay: 800,
                }, //false,
                speed: 1500,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
            $(".swiper-button-pause").toggle(function() {
                $(this).addClass('play');
                homeBannerSlider.autoplay.stop();
            }, function() {
                $(this).removeClass('play');
                homeBannerSlider.autoplay.start();
                return false;
            });
        };
        $(window).load(function() {
            $(".combatEquipment .tabNav li:first-child a").trigger('click');
        });
        $('.combatEquipment .tabNav li a').on('click', function() {
            setTimeout(function() {
                homePageProductSlider();
            }, 100);
        });
        // Home Gallery Slider
        if ($(".homeGallerySlider").length) {
            var homeGallerySlider = new Swiper('.homeGallerySlider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: 4,
                loop: true,
                centeredSlides: true,
                observer: true,
                observeParents: true,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                //effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 0,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1279: {
                        slidesPerView: 4,
                        centeredSlides: true,
                    }
                }
            });
        };
        // Home Video Slider
        if ($(".homeVideoSlider").length) {
            var homeVideoSlider = new Swiper('.homeVideoSlider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: 4,
                loop: true,
                centeredSlides: true,
                observer: true,
                observeParents: true,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                //effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 0,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1279: {
                        slidesPerView: 4,
                        centeredSlides: true,
                    }
                }
            });
        };
        // Case Studies Slider	
        /*if ($(".productImageSlider").length > 3) {
            $(".productImageSlider .sliderAmallArrow").addClass("active");
            var productImageSlider = new Swiper('.productImageSlider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: 4,
                loop: true,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                //effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    479: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    1023: {
                        slidesPerView: 3,
                    },
                    1441: {
                        slidesPerView: 4,
                    }
                }
            });
        };*/
        //Home IMP links Slider	
        if ($(".homeImpLinksSlider").length) {
            var homeImpLinksSlider = new Swiper('.homeImpLinksSlider .swiper-container', {
                pagination: false,
                paginationClickable: true,
                navigation: {

                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slideNextClass: 'swiper-slide-active',
                spaceBetween: 0,
                slidesPerView: 7,
                slidesPerGroup: 1,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                loop: true,
                breakpoints: {
                    1440: {
                        slidesPerView: 5,
                    },
                    1023: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                }
            });
        }
        //Footer Logo Slider	
        if ($(".footerLogoSlider").length) {
            var footerlogoslider = new Swiper('.footerLogoSlider .swiper-container', {
                pagination: false,
                paginationClickable: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slideNextClass: 'swiper-slide-active',
                spaceBetween: 0,
                slidesPerView: 5,
                slidesPerGroup: 1,
                autoplay: {
                    delay: 5000,
                },
                speed: 1000,
                loop: true,
                breakpoints: {
                    1440: {
                        slidesPerView: 5,
                    },
                    1360: {
                        slidesPerView: 4,
                    },
                    800: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                }
            });
        }
        //What's News Slider	
        /*if($(".whatsNewsSlider").length){
        	var whatsNewsSlider = new Swiper('.whatsNewsSlider .swiper-container', {
        		direction: 'vertical',
        		slidesPerView: 4,
        		spaceBetween: 0,
        		mousewheel: true,
        		pagination: { el: '.swiper-pagination', clickable: true,},
        		navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},
        		slidesPerGroup:1,
        		autoplay: {	delay: 5000,},	
        		speed:1000,
        		loop:true,
        		mousewheel:false
        	});
        	$(".whatsNewsSlider .swiper-container").hover(function() {
        		(this).swiper.autoplay.stop();
        	}, function() {
        		(this).swiper.autoplay.start();
        	});
        }	*/
        // Home Banner
        if ($(".subSiteHomeBannerSlider .swiper-slide").length > 1) {
            $(".subSiteHomeBannerSlider .swiper-button-next, .subSiteHomeBannerSlider .swiper-button-prev").addClass("active");
            var homeBannerSlider = new Swiper('.subSiteHomeBannerSlider .swiper-container', {
                pagination: false,
                paginationClickable: true,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                effect: 'fade',
                simulateTouch: false,
                autoplay: false,
                speed: 1000,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
        };
        // Home Careers slider	
        if ($(".labHomeCareersSlider").length) {
            var homeCareersSlider = new Swiper('.labHomeCareersSlider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: 5,
                loop: false,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                pagination: false,
                paginationClickable: true,
                navigation: {
                    nextEl: '.careerSliderArrow .swiper-button-next',
                    prevEl: '.careerSliderArrow .swiper-button-prev',
                },
                breakpoints: {
                    639: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1279: {
                        slidesPerView: 3,
                        centeredSlides: true,
                    }
                }
            });
        };
        // Home Careers slider	
        if ($(".labHomeSingleCareersSlider").length) {
            var homeCareersSlider = new Swiper('.labHomeSingleCareersSlider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                pagination: false,
                paginationClickable: true,
                navigation: {
                    nextEl: '.swiper-button-next-career',
                    prevEl: '.swiper-button-prev-career',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 0,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1,
                    },
                    1279: {
                        slidesPerView: 1,
                        centeredSlides: true,
                    }
                }
            });
        };
        // Home Technologies slider	
        if ($(".homeTechnologieSlider").length) {
            var homeTechnologieSlider = new Swiper('.homeTechnologieSlider .swiper-container', {
                spaceBetween: 0,
                slidesPerView: 4,
                loop: true,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                pagination: false,
                paginationClickable: true,
                navigation: {
                    nextEl: '.swiper-button-nextTech',
                    prevEl: '.swiper-button-prevTech',
                },
                breakpoints: {
                    639: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                        centeredSlides: true,
                    },
                    1279: {
                        slidesPerView: 4,
                    }
                }
            });
        };
        // Home Technologies slider	
        if ($(".techCluEventSlider").length) {
            var techCluEventSlider = new Swiper('.techCluEventSlider .swiper-container', {
                spaceBetween: 30,
                slidesPerView: 3,
                loop: false,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                pagination: false,
                paginationClickable: true,
                navigation: {
                    nextEl: '.swiper-button-nextTechEvent',
                    prevEl: '.swiper-button-prevTechEvent',
                },
                breakpoints: {
                    639: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    767: {
                        slidesPerView: 2,
                        //centeredSlides:true,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    1279: {
                        slidesPerView: 3
                    },
                    1366: {
                        spaceBetween: 10
                    }
                }
            });
        };
        // product slider			
        if ($(".technologiesProductSlider").length > 40) {
            $(".technologiesProductSlider .swiper-button-nextProduct, .technologiesProductSlider .swiper-button-prevProduct, .technologiesProductSlider").addClass("active");
            var technologiesProductSlider = new Swiper('.technologiesProductSlider .swiper-container', {
                spaceBetween: 55,
                slidesPerView: 4,
                loop: false,
                autoplay: {
                    delay: 15000,
                    disableOnInteraction: false,
                },
                pagination: false,
                paginationClickable: true,
                navigation: {
                    nextEl: '.swiper-button-nextProduct',
                    prevEl: '.swiper-button-prevProduct',
                },
                breakpoints: {
                    639: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1599: {
                        slidesPerView: 4
                    }
                }
            });
        };
        //read more less
        /*$('.proDetailReadmore').moreLines({
            linecount: 8,
            baseclass: 'b-description',
            basejsclass: 'js-description',
            classspecific: '_readmore',
            buttontxtmore: "Read More",
            buttontxtless: "Read Less",
            animationspeed: 600
        });*/

        //On click go to bext section
        /*$('.goToSection').click(function(e) {
            var jump = $(this).attr('href');
            var new_position = $(jump).offset();
            //alert(jump);
            $('html, body').stop().animate({
                scrollTop: new_position.top - 100
            }, 500);
            $(this).addClass("deActive");
            setTimeout(function() {
                $(jump).find(".goToSection").addClass("showArrow")
            }, 100);
            e.preventDefault();
        });*/

        //On click go to next section
        $('.goToSection').click(function(e) {
            var jump = $(this).attr('href');
            var new_position = $(jump).offset();
            $('html, body').stop().animate({
                scrollTop: new_position.top - 100
            }, 500);
            $(this).hide();
            setTimeout(function() {
                $(jump).find(".goToSection").show()
            }, 100);
            e.preventDefault();
        });



        if ($(".innerBanner").length) {
            $(".pageBannerImg").each(function() {
                var imagePath = $(this).find("img").attr("src");
                $(this).css("background-image", "url( " + imagePath + " )");
            });
        }
        if ($(".homeBanner").length) {
            $(".bannerImg").each(function() {
                var imagePath = $(this).find("img").attr("src");
                $(this).css("background-image", "url( " + imagePath + " )");
            });
        }

        if ($(".subSiteHomeBannerSlider").length) {
            $(".swiper-slide .bannerImg").each(function() {
                var imagePath = $(this).find("img").attr("src");
                $(this).css("background-image", "url( " + imagePath + " )");
            });
        }


        if ($('.singleImagePopup').length) {
            $('.singleImagePopup').magnificPopup({
                type: 'image',
                closeOnContentClick: false,
                fixedContentPos: false,
                closeBtnInside: false,
                mainClass: 'imagePopupContent my-mfp-zoom-in',
                image: {
                    verticalFit: true
                },
            });
        }
        $('.singleVideoPopup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: false
        });
        $('.photoGallery').magnificPopup({
            delegate: '.galleryImg',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            closeBtnInside: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title');
                }
            }
        });
        // Skip to Main Content
        $('.skipContent').on('click', function(e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 700, 'swing', function() {
                window.location.hash = target;
            });
        });
        // Add class in section
        if ($(".mem").length) {
            $(window).on("scroll", function() {
                $(".mem").each(function() {
                    var sectionTop = $(this).offset().top - 300;
                    var scroll = $(window).scrollTop();
                    if (scroll >= sectionTop) {
                        $(this).addClass('activeBlock');
                    } else {
                        //$(".contactUs, .innerContactInfo").removeClass('activeBlock');
                    }
                });
            });
        }
        //Custome Select Dropdown
        if ($(".customSelect").length) {
            $('.customSelect').customSelect();
        }
        //sectorbox
        if ($(".sectorList").length) {
            $('.sectorList').lavalamp({
                easing: 'easeOutBack'
            });
            $('.sectorList li:first').addClass("active");
            $('.sectorList li').on("mouseenter", function() {
                $('.sectorList li').removeClass("active");
                $(this).addClass("active");
            });
            $('.sectorList li').on("mouseleave", function() {
                $(this).removeClass("active");
                $('.sectorList li:first').addClass("active");
            });
        }
        if ($(".marqueeScrolling li").length > 1) {
            var $mq = $('.marquee').marquee({
                speed: 25000,
                gap: 0,
                duplicated: true,
                pauseOnHover: true
            });
            $(".btnMPause").toggle(function() {
                $(this).addClass('play');
                $(this).text('Play');
                $mq.marquee('pause');
            }, function() {
                $(this).removeClass('play');
                $(this).text('Pause');
                $mq.marquee('resume');
                return false;
            });
        };
        //cutom tabs accordian
        if ($(".customTabNav").length) {
            $(".customTabNav li a").each(function() {
                var tab = $(this).attr("href");
                $(this).clone().append().insertBefore(tab).wrap('<div class="tabAccTitle"></div>');
            });
        }
        //New Tabs
        if ($(".customTab").length) {
            $(document).on('click', '.customTabNav a', function(e) {
                e.preventDefault();
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
                var tab = $(this).attr("href");
                $(this).closest(".customTabNav").siblings(".tabContainer").find(".customTabContent").not(tab).css("display", "none");
                $(tab).fadeIn();
            });
            $(".customTab").each(function() {
                $(this).find(".customTabNav li:first").addClass("active");
            });
            $(".customTabNav li.active a").trigger("click");
        };
        //steptab active status
        if ($(".stepsFormsTabs").length) {
            $(document).on('click', '.customTabNav a', function(e) {
                $(this).parent().prevAll().addClass("active");
            });
        }
        // Responsive Tabing Script
        if ($(".resTab").length) {
            $('.resTab').responsiveTabs({
                rotate: false,
                startCollapsed: 'tab' //accordion
                    ,
                collapsible: 'tab' //accordion
                    ,
                scrollToAccordion: true
            });
        };
        // Back to Top function
        if ($("section").length) {
            $(window).on("scroll", function() {
                $("section").each(function() {
                    var sectionTop = $(this).offset().top - 300;
                    var scroll = $(window).scrollTop();
                    if (scroll >= sectionTop) {
                        $(this).addClass('activeBlock');
                    } else {
                        //$(".contactUs, .innerContactInfo").removeClass('activeBlock');
                    }
                });
            });
        }
        // Multiple Ticker	
        /*if ($(".ticker").length) {
            $('.ticker').each(function(i) {
                $(this).addClass('tickerDiv' + i).attr('id', 'ticker' + i);
                $('#ticker' + i).find('.tickerDivBlock').first().addClass('newsTikker' + i).attr('id', 'newsTikker' + i);
                $('#ticker' + i).find('a.playPause').attr('id', 'stopNews' + i)
                $('#newsTikker' + i).vTicker({
                    speed: 1E3,
                    pause: 4E3,
                    animation: "fade",
                    mousePause: false,
                    showItems: 2,
                    height: 195,
                    direction: 'up'
                })
                $("#stopNews" + i).click(function() {
                    if ($(this).hasClass('stop')) {
                        $(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
                    } else {
                        $(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
                    }
                    return false;
                });
            });
        };*/

        // Multiple Ticker
        setTimeout(function() {

            if ($(".ticker").length) {

                $('.ticker').each(function(i) {
                    $(this).addClass('tickerDiv' + i).attr('id', 'ticker' + i);
                    $('#ticker' + i).find('.tickerDivBlock').first().addClass('newsTikker' + i).attr('id', 'newsTikker' + i);
                    $('#ticker' + i).find('a.playPause').attr('id', 'stopNews' + i)
                    $('#newsTikker' + i).vTicker({
                        speed: 1E3,
                        pause: 4E3,
                        animation: "fade",
                        mousePause: false,
                        showItems: 3,
                        height: 150,
                        direction: 'up'
                    })
                    $("#stopNews" + i).click(function() {
                        if ($(this).hasClass('stop')) {
                            $(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
                        } else {
                            $(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
                        }
                        return false;
                    });
                });
            };
        }, 200);

        $(".categoryTechWrap .commonCateTech h3").click(function() {
            if ($(this).hasClass("acc-active")) {
                $(this).removeClass("acc-active");
                $(this).next(".categoryTechWrap .commonCateTech .cateList").slideUp();
            } else {
                $(".categoryTechWrap .commonCateTech h3").removeClass("acc-active");
                $(".categoryTechWrap .commonCateTech .cateList").slideUp();
                $(this).next(".categoryTechWrap .commonCateTech .cateList").slideDown();
                $(this).addClass("acc-active");
            }
        });
        if ($(".accordion").length) {
            $('.accordion .accordDetail').hide();
            $(".accordion .accordDetail:first").show();
            $(".accordion .accTrigger:first").addClass("active");
            $('.accordion .accTrigger').click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    if ($('body').hasClass('desktop')) {
                        $('.accordion .accTrigger').removeClass('active');
                        $('.accordion .accordDetail').slideUp();
                    }
                    $(this).addClass('active');
                    $(this).next().slideDown();
                }
                return false;
            });
        };
        if ($(".tableData").length > 0) {
            $('.tableData').each(function() {
                $(this).wrap('<div class="tableOut"></div>');
                $(this).find('tr').each(function() {
                    $(this).find('td:first').addClass('firstTd');
                    $(this).find('th:first').addClass('firstTh');
                    $(this).find('th:last').addClass('lastTh');
                });
                $(this).find('tr:last').addClass('lastTr');
                $(this).find('tr:even').addClass('evenRow');
                $(this).find('tr:nth-child(2)').find('th:first').removeClass('firstTh');
            });
        };
        // Responsive Table
        if ($(".responsiveTable").length) {
            $(".responsiveTable").each(function() {
                $(this).find('td').removeAttr('width');
                //$(this).find('td').removeAttr('align');
                var head_col_count = $(this).find('tr th').size();
                // loop which replaces td
                for (i = 0; i <= head_col_count; i++) {
                    // head column label extraction
                    var head_col_label = $(this).find('tr th:nth-child(' + i + ')').text();
                    // replaces td with <div class="column" data-label="label">
                    $(this).find('tr td:nth-child(' + i + ')').attr("data-label", head_col_label);
                }
            });
        };
        // Responsive Table
        if ($(".tableScroll").length) {
            $(".tableScroll").each(function() {
                $(this).wrap('<div class="tableOut"></div>');
            });
        };
        // Back to Top function
        if ($("#backtotop, #canIhelp").length) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 120) {
                    $('#backtotop, #canIhelp').fadeIn('250').css('display', 'block');
                } else {
                    $('#backtotop, #canIhelp').fadeOut('250');
                }
            });
            $('#backtotop').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, '200');
                $(".goToSection").hide();
                $(".homeBanner .goToSection").show();
                return false;

            });
        };
        // Get Focus Inputbox
        if ($(".getFocus").length) {
            $(".getFocus").each(function() {
                $(this).on("focus", function() {
                    if ($(this).val() == $(this)[0].defaultValue) {
                        $(this).val("");
                    };
                }).on("blur", function() {
                    if ($(this).val() == "") {
                        $(this).val($(this)[0].defaultValue);
                    };
                });
            });
        };
        // For device checking
        if (isMobile == false) {};
        // Video JS
        if ($(".videoplayer").length) {
            $(".videoplayer").each(function() {
                var $this = $(this);
                var poster = $this.children("a").find("img").attr("src");
                var title = $this.children("a").find("img").attr("alt");
                var videotype = $this.children("a").attr("rel");
                var video = $this.children("a").attr("href");
                $this.children("a").remove();
                projekktor($this, {
                        poster: poster,
                        title: title,
                        playerFlashMP4: '../projekktor-1/jarisplayer.swf',
                        playerFlashMP3: '../projekktor-1/jarisplayer.swf',
                        width: 640,
                        height: 385,
                        fullscreen: true,
                        playlist: [{
                            0: {
                                src: video,
                                type: videotype
                            }
                        }],
                        plugin_display: {
                            logoImage: '',
                            logoDelay: 1
                        }
                    }, function(player) {} // on ready 
                );
            })
        };

        setTimeout(function() {
            if ($(".litebox").length) {
                $('.litebox').liteBox();
            };
        }, 100);

        /* $('a').not(".litebox, .singleVideoPopup, .colorbox").filter(function() {
                    return this.hostname && this.hostname !== location.hostname;
                }).click(function(e) {
                    e.preventDefault();
                    var url = $(this).attr("href");
                    smoke.confirm("You are about to proceed to an external website. Click Yes to proceed.", function(e) {
                        if (e) {
                            window.open(url, "_blank");
                        } else {
                            return false;
                        }
                    }, {
                        ok: "Yes",
                        cancel: "No",
                        classname: "custom-class",
                        reverseButtons: true
                    });
                }); */

        $('a[target="_blank"]').not(".litebox, .singleVideoPopup, .colorbox").addClass("thirdPartyUrl");

        $('a[target="_blank"]').not(".litebox, .singleVideoPopup, .colorbox").click(function() {
            setTimeout(function() {
                $('#redirectconfirm-modal .btn-default').focus();
            }, 100);
        });

        $(document.body).RedirectConfirm({
            selector: "a.thirdPartyUrl",
            excluding: 'data-rc-exclude',
            title: 'Exiting our website',
            message: 'You are about to proceed to an external website. Click Yes to proceed.',
            returnlbl: 'No',
            continuelbl: 'Yes',
            targetUrl: '_blank'
        });

        $(".btn").click(function() {
            $("body").removeClass("modal-open");
        });

        $(".thirdPartyUrl").click(function() {
            var RedirectUrl = $(this).attr('href');
            $("#redirectconfirm-modal .btn-continue").attr("href", RedirectUrl);
        });

        //#redirectconfirm-modal


        // Search Box
        if ($(".search").length) {
            $('.search').click(function(e) {
                e.preventDefault();
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                    $(this).next().slideDown(300);
                } else {
                    $(this).removeClass('active');
                    $(this).next().slideUp(300);
                }
                return false;
            });
        }
        $('.searchBoxWrap').click(function(e) {
            e.stopPropagation();
        });
        $(document).click(function() {
            $('.searchBoxToggle').slideUp();
            $('.search > a').removeClass('active');
        });
        setTimeout(function() {
            if ($(".fixedErrorMsg").length) {
                $(".fixedErrorMsg").slideDown("slow");
                setTimeout(function() {
                    $('.fixedErrorMsg').slideUp();
                }, 5000);
            }
            if ($(".fixedSuccessMsg").length) {
                $(".fixedSuccessMsg").slideDown("slow");
                setTimeout(function() {
                    $('.fixedSuccessMsg').slideUp();
                }, 5000);
            }
        }, 500);
        /*================= On Document Load and Resize Start =================*/
        $(window).on('resize', function() {
            ww = document.body.clientWidth;
            wh = document.body.clientHeight;
            if ($("body").hasClass("mobilePort")) {
                $("body").removeClass("wob");
            }
            //$('.container').resize(function(){});
        }).trigger('resize');
        /*================= On Document Load and Resize End =================*/
        if ($(".mediaGalleryContainer").length) {
            var prevBtn = $(".mediaGalleryContainer").find(".sliderCurvenavPrev");
            var nextBtn = $(".mediaGalleryContainer").find(".sliderCurvenavNext");
            var sucessStoriesSlider = new Swiper('.mediaGalleryContainer .swiper-container', {
                pagination: false,
                paginationClickable: true,
                slideNextClass: 'swiper-slide-active',
                slidesPerView: 6,
                slidesPerGroup: 1,
                autoplay: true,
                speed: 1000,
                loop: true,
                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                breakpoints: {
                    2500: {
                        slidesPerView: 5,
                    },
                    1920: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 3,
                    },
                }
            });
        }
        if ($(".messageBoardContainer").length) {
            var prevBtn = $(".messageBoardContainer").find(".sliderCurvenavPrev");
            var nextBtn = $(".messageBoardContainer").find(".sliderCurvenavNext");
            var sucessStoriesSlider = new Swiper('.messageBoardContainer .swiper-container', {
                pagination: false,
                paginationClickable: true,
                slideNextClass: 'swiper-slide-active',
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 50,
                autoplay: true,
                speed: 1000,
                loop: true,
                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                breakpoints: {
                    2500: {
                        slidesPerView: 2,
                    },
                    1920: {
                        slidesPerView: 2,
                    },
                    1600: {
                        slidesPerView: 2,
                    },
                }
            });
        }
        /*AOS.init({
            once: true
        });*/

        $(".categoryAtech > span").click(function() {
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 200);
            if ($(this).hasClass("acc-active")) {
                $(this).removeClass("acc-active");
                $(this).next(".categoryAtech .cateTechnoList").slideUp();
            } else {
                //$(".categoryAtech > span").removeClass("acc-active");
                //$(".categoryAtech .cateTechnoList").slideUp();
                $(this).next(".categoryAtech .cateTechnoList").slideDown();
                $(this).addClass("acc-active");
            }
        });

        /*$( "li", ".cateListWrap .bulletText" ).sort(function( a, b ) {
        	return $( a ).text() > $( b ).text(); 

        }).appendTo( ".cateListWrap .bulletText" );*/

        /*var mylist = $('ul');
var listitems = mylist.children('li').get();
listitems.sort(function(a, b) {
   var compA = $(a).text().toUpperCase();
   var compB = $(b).text().toUpperCase();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });*/


        // vendor form step active class
        if ($(".node-vendor-registration-form").length) {
            if ($(".multi-steps-label .step-label").hasClass("active")) {
                /* var checkFirstStep = $(".multi-steps-label .step-label.active").text();
                		if(checkFirstStep == "Step 1"){
                			console.log("First Active");
                			$("#edit-next").on( "click", function(e) {
                				e.preventDefault();
                				console.log("Click");
                				$("#edit-submit").trigger("click");
                			});
                		}else{
                			console.log("Other Active");
                		} */
                $(".multi-steps-label .step-label.active").prevAll().addClass("active");
            }
            if ($("#edit-field-kind-of-ownership").length) {
                $("#edit-field-kind-of-ownership").on("change", function() {
                    var dropId = $(this).val();
                    $(".rvDetails").hide();
                    if (dropId == 45) {
                        $(".rvDetails").hide();
                        $("#directorname, #managingname").show();
                    }
                    if (dropId == 46) {
                        $(".rvDetails").hide();
                        $("#proprietorname, #managername").show();
                    }
                    if (dropId == 47) {
                        $(".rvDetails").hide();
                        $("#field-partnership #partnername").remove();
                        $("#field-partnership").prepend('<h3 id="partnername" class="rvDetails kpTitle">Partnership Details</h3>');
                        $("#partnername").show();
                        $("#partnername").removeClass('rvDetails');
                    }
                });
            }
        }
        if ($(window).width() < 767) {
            $(".topStrip .rightLinks > li:nth-child(2)").clone().appendTo(".copyrightLink");
            $(".topStrip .leftLink li:nth-child(2)").clone().appendTo(".copyrightLink");
            $(".topStrip .leftLink li:nth-child(3)").clone().appendTo(".copyrightLink");
            $(".headerLogoRowRight").clone().appendTo(".rightLinks");
        }
        // For dymanic click on the theme Buttons
        if ($('div .contrastView').find('#sWob')) {
            $('div .contrastView').find('#sWob').trigger('click');
        }

        if ($('div .contrastView').find('#bWob')) {
            $('div .contrastView').find('#bWob').trigger('click');
        }

        if ($('div .contrastView').find('#tWob')) {
            $('div .contrastView').find('#tWob').trigger('click');
        }

        if ($('div .contrastView').find('#normal')) {
            $('div .contrastView').find('#normal').trigger('click');
        }

    });
    /*================= On Document Load End =================*/
    /*================= On Window Resize Start =================*/
    $(window).bind('resize orientationchange', function() {
        getWidth();
        adjustMenu();
        //animation();
        menuMove();
        mobileClickNav();
        /*if ($(".b-description_readmore_button_active").length) {
            $(".b-description_readmore_button_active").prev(".proDetailText").css("height", "auto");
        }*/
    });
    /*================= On Window Resize End =================*/
    /*================= On Window Load Start =================*/
    $(window).load(function() {
        stickyHeader();
    });
    /*================= On Document Load End =================*/
    $(window).scroll(function() {
        stickyHeader();
    });

    function getWidth() {
        ww = document.body.clientWidth;
        if (ww > wideScreen) {
            $('body').removeClass('device').addClass('desktop widerDesktop');
        }
        if (ww > mobilePort && ww <= wideScreen) {
            $('body').removeClass('device widerDesktop').addClass('desktop');
        }
        if (ww <= mobilePort) {
            $('body').removeClass('desktop widerDesktop').addClass('device');
        }
        if (ww <= ipadView) {
            $('body').removeClass('desktop');
        }
        if (ww > 767 && ww < 1025) {
            $('body').addClass('ipad');
        } else {
            $('body').removeClass('ipad');
        }
        if (ww > 1280) {
            $('body').addClass('animationOn');
        } else {
            $('body').removeClass('animationOn');
        }
    }
})(jQuery);

function validate() {
    return false;
};

/*function animation() {
    if ($(".animationOn").length) {
        $(window).paroller({
            //factor: 0.3,            // multiplier for scrolling speed and offset
            type: 'background', // background, foreground
            direction: 'vertical' // vertical, horizontal, TODO: diagonal
        });
    } else {
        $(".noAnimate").css({
            "background-position": "inherit",
            "-webkit-transform": "translateY(0)",
            "-ms-transform": "translateY(0)",
            "-o-transform": "translateY(0)",
            "transform": "translateY(0)"
        });
    }
}*/

function stickyHeader() {
    /*if ($(window).scrollTop() > $("header").outerHeight()) {
        $("body").addClass("stickyHeader");
    } else {
        $("body").removeClass("stickyHeader");
    }*/
}
// Featured Products Slider
function homePageProductSlider() {
    if ($(".combatEquipmentSlider").length) {
        var combatEquipmentSlider = new Swiper('.combatEquipmentSlider .swiper-container', {
            spaceBetween: 0,
            slidesPerView: 5,
            loop: false,
            simulateTouch: false,
            autoplay: {
                delay: 15000,
                disableOnInteraction: false,
            },
            //effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                639: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    simulateTouch: true,
                    //loop: true
                },
                768: {
                    slidesPerView: 2,
                    simulateTouch: true,
                    //loop: true
                },
                1169: {
                    slidesPerView: 3,
                    simulateTouch: true,
                    //loop: true
                },
                1280: {
                    slidesPerView: 4,
                },
                1281: {
                    slidesPerView: 5,
                }
            }
        });
    };
}
//mobile menu function
function menuMove() {
    if ($(".mobileNav").length == 0) {
        var navigation = $('#nav').clone();
        $(navigation).appendTo("body").wrap("<div class='mobileNav'></div>");
        if ($(".mobileNav #navMob").length == 0) {
            $(".mobileNav #nav").attr("id", "navMob");
            $(".mobileNav").append("<span class='close homeSprite'></span>");
            $(".mobileNav").append("<span class='navigationText'>Navigation</span>");
            $(".mobileNav").append("<span class='logoText'><span class='logoIcon homeSprite'></span></span>");
            $(".mobileNav .close").click(function() {
                $("body").removeClass("activeMobNav");
            });
        }
    }
}
//Navigation
function mobileClickNav() {
    if ($("#navMob").length) {
        if ($(".toggleMenu").length == 0) {
            $("#mainNav").prepend('<div class="menuBar"><a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar homeSprite"></span></a></div>');
        }
        $(".toggleMenu").off("click");
        $(".toggleMenu").click(function() {
            $(this).toggleClass("active");
            $("body").addClass("activeMobNav");
            return false;
        });
        $("#navMob li a").each(function() {
            if ($(this).next().length) {
                $(this).parent().addClass("parent");
            };
        });
        $("#navMob li.parent").each(function() {
            if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon homeSprite">&nbsp;</i>')
        });
        adjustMenu();
    };
}
setTimeout(function() {
    menuMove();
    mobileClickNav();
    dropdown('nav', 'hover', 1);
}, 1000);



$(document).ready(function() {
    $("select#edit-field-vendor-state-kind").live('change', function() {
        var base_url = $('input#base_url').val();
        if ($(this).val() != "") {
            var ajaxLink = base_url + 'get-district-value/' + $(this).val();
            console.log(ajaxLink);
            var resultd = "";
            $.ajax({
                url: ajaxLink,
                success: function(result) {
                    $("select#edit-field-vendor-district-kind-one").html(result);
                }
            });
        }
    });

    $("select#edit-field-vendor-state-pd").live('change', function() {
        var base_url = $('input#base_url').val();
        if ($(this).val() != "") {
            var ajaxLink = base_url + 'get-district-value/' + $(this).val();
            console.log(ajaxLink);
            var resultd = "";
            $.ajax({
                url: ajaxLink,
                success: function(result) {
                    $("select#edit-field-vendor-district-kind-three").html(result);
                }
            });
        }
    });

    $("select#edit-field-vendor-state-so").live('change', function() {
        var base_url = $('input#base_url').val();
        if ($(this).val() != "") {
            var ajaxLink = base_url + 'get-district-value/' + $(this).val();
            console.log(ajaxLink);
            var resultd = "";
            $.ajax({
                url: ajaxLink,
                success: function(result) {
                    $("select#edit-field-vendor-district-kind-four").html(result);
                }
            });
        }
    });

    $("select#edit-field-vendor-state-details").live('change', function() {
        var base_url = $('input#base_url').val();
        if ($(this).val() != "") {
            var ajaxLink = base_url + 'get-district-value/' + $(this).val();
            console.log(ajaxLink);
            var resultd = "";
            $.ajax({
                url: ajaxLink,
                success: function(result) {
                    $("select#edit-field-vendor-district-kind-two").html(result);
                }
            });
        }
    });

    $("select#edit-field-branch-sales-state").live('change', function() {
        var base_url = $('input#base_url').val();
        if ($(this).val() != "") {
            var ajaxLink = base_url + 'get-district-value/' + $(this).val();
            console.log(ajaxLink);
            var resultd = "";
            $.ajax({
                url: ajaxLink,
                success: function(result) {
                    $("select#edit-field-banker-vendor-district").html(result);
                }
            });
        }
    });

    $("select.select_field_branch_sales_office_state").live('change', function() {
        var targetDistrictClass = $(this).attr('data-target-district');
        console.log(targetDistrictClass);
        var base_url = $('input#base_url').val();
        if ($(this).val() != "") {
            var ajaxLink = base_url + 'get-district-value/' + $(this).val();
            console.log(ajaxLink);
            console.log("." + targetDistrictClass);
            var resultd = "";
            $.ajax({
                url: ajaxLink,
                success: function(result) {
                    $("." + targetDistrictClass).html(result);
                }
            });
        }

    });
});