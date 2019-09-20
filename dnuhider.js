$('option').each(function() {
    if (!(this.selected))
       if (this.text.substring(0,3) == "DNU")
         $(this).remove();
});
