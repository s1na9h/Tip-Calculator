let radioID;
let ratio = false
let billAmount = false
let ppl = false

$('label.radio').click((e)=>{radioID=$(e.target).attr("for")
    ratio= +$(`#${radioID}`).val()
    $('label.radio').removeClass('selected')
    $(e.target).addClass('selected')
})

$('#bill-amount').on('input',(e)=>{
    if (+$(e.target).val()){
        $('#bill-amount').removeClass('wrong')
        billAmount= +$(e.target).val();
    }
    else {
        $('#bill-amount').addClass('wrong')
        billAmount=false
    }
})

$('#num-of-ppl').on('input',(e)=>{
    
    if(+$(e.target).val()===0){
        $('#num-of-ppl').addClass('wrong')
        $('.cant-zero').text('Cant be zero').show()
        ppl=false
    }
    else if (!(isNaN(+$(e.target).val()))){
        $('#num-of-ppl').removeClass('wrong')
        $('.cant-zero').hide()
        ppl= +$(e.target).val()
    }
    else {
        $('#num-of-ppl').addClass('wrong')
        $('.cant-zero').text('Number Only').show()
        ppl=false
    }
})

$('form').on('submit', (e)=>{e.preventDefault()
    if(ratio && ppl && billAmount){
        $('#tip-amount').text((billAmount*ratio/ppl).toFixed(2))
        $('#total').text(((billAmount*(1 + ratio))/ppl).toFixed(2))
    }
})

$('.reset').click(()=>{
    $('label.radio').removeClass('selected')
    $('#tip-amount').text('0.00')
    $('#total').text('0.00')
    $('#num-of-ppl').val('')
    $('#bill-amount').val('')
    ratio = false
    ppl = false
    billAmount = false
})


