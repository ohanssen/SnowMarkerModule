// let boolDrawboxToggle = false //TODO: need better name

function tb_draw_click()
{ 
    
    $(".POPUP").toggle() 
    /* if(boolDrawboxToggle)
    {
        $('#drawbox').addClass('POPUP')
    }
    else
    {
        $('#drawbox').removeClass('POPUP')
    } 
    boolDrawboxToggle = !boolDrawboxToggle  */
}

$( function() 
{
    $( ".ui-draggable").draggable();
} );