//'use strict';
(function($, Drupal) {
    if ($("form.node-feedback-form").length) {
        $("form.node-feedback-form #edit-field-type").change(function() {
            if ($(this).val() == "4") {
                $("form.node-feedback-form .field--name-field-other-type label").attr('class', 'js-form-required form-required');
                $("form.node-feedback-form input#edit-field-other-type-0-value").attr('required', 'required');
            } else {
                $("form.node-feedback-form .field--name-field-other-type label").removeAttr('class');
                $("form.node-feedback-form input#edit-field-other-type-0-value").removeAttr('required');
            }
        });
        $("form.node-feedback-form #edit-field-subject").change(function() {
            if ($(this).val() == "8") {
                $("form.node-feedback-form .field--name-field-other-subject label").attr('class', 'js-form-required form-required');
                $("form.node-feedback-form input#edit-field-other-subject-0-value").attr('required', 'required');
            } else {
                $("form.node-feedback-form .field--name-field-other-subject label").removeAttr('class');
                $("form.node-feedback-form input#edit-field-other-subject-0-value").removeAttr('required');
            }
        });
    }
    if ($(".node-vendor-registration-form").length) {
        var field_history_of_banning_de_regi = $("#edit-field-history-of-banning-de-regi").val();
        console.log('-' + field_history_of_banning_de_regi + '-');
        if (field_history_of_banning_de_regi == "Yes") {
            $(".field--name-field-history-undertaking-form").attr('style', 'block');
        } else if (field_history_of_banning_de_regi == "No") {
            $(".field--name-field-upload-undertaking-form").attr('style', 'block');
        }
    }
});