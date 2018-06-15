
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        
        // adding new block for serial number
        var addto = "#sno" + next;
        next = next + 1;
        var newIn = '<input class="inp" id="sno' + next + '" name="sno' + next + '" type="text"> required';
        var newInput = $(newIn);
        $(addto).after(newInput);

        // adding new block for Product name
        next = next - 1;
        addto = "#pdt" + next;
        next = next + 1;
        newIn = '<input class="inp" id="pdt' + next + '" name="pdt' + next + '" type="text"> required';
        newInput = $(newIn);
        $(addto).after(newInput);

        //adding new block for product specification
        next = next - 1;
        addto = "#spec" + next;
        next = next + 1;
        newIn = '<input class="inp" id="spec' + next + '" name="spec' + next + '" type="text"> required';
        newInput = $(newIn);
        $(addto).after(newInput);

        //adding new block for vendor
        next = next - 1;
        addto = "#vendor" + next;
        next = next + 1;
        // newIn = '<input class="inp" id="vendor' + next + '" name="vendor' + next + '" type="text">';
        newIn = '<select name="vendor' + next +'" id = "vendor' + next +'" class = "inp"> <option value="first">First Value</option> <option value="second" selected>Second Value</option><option value="third">Third Value</option></select>'
        newInput = $(newIn);
        $(addto).after(newInput);

        //adding new block for qty
        next = next - 1;
        addto = "#qty" + next;
        next = next + 1;
        newIn = '<input class="inp" id="qty' + next + '" name="qty' + next + '" type="text"> required';
        newInput = $(newIn);
        $(addto).after(newInput);

        //adding new block for unit
        next = next - 1;
        addto = "#unit" + next;
        next = next + 1;
        newIn = '<input class="inp" id="unit' + next + '" name="unit' + next + '" type="text"> required';
        newInput = $(newIn);
        $(addto).after(newInput);

        //adding new block for comment
        next = next - 1;
        addto = "#comment" + next;
        next = next + 1;
        newIn = '<input class="inp" id="comment' + next + '" name="comment' + next + '" type="text">';
        newInput = $(newIn);
        $(addto).after(newInput);



        $("#count").val(next);
    });

    $(".remove-line").click(function(e){
        e.preventDefault();
        
        // To remove field of S. No.
        var fieldNum = next;
        next = next - 1;
        var fieldID = "#sno" + fieldNum;
        $(fieldID).remove();

        // To remove field of Product name
        next = next + 1;
        fieldNum = next;
        next = next - 1;
        fieldID = "#pdt" + fieldNum;
        $(fieldID).remove();

        // To remove field of Product specification
        next = next + 1;
        fieldNum = next;
        next = next - 1;
        fieldID = "#spec" + fieldNum;
        $(fieldID).remove();

        // To remove field of Vendor
        next = next + 1;
        fieldNum = next;
        next = next - 1;
        fieldID = "#vendor" + fieldNum;
        $(fieldID).remove();

        // To remove field of Qty
        next = next + 1;
        fieldNum = next;
        next = next - 1;
        fieldID = "#qty" + fieldNum;
        $(fieldID).remove();

        // To remove field of Unit
        next = next + 1;
        fieldNum = next;
        next = next - 1;
        fieldID = "#unit" + fieldNum;
        $(fieldID).remove();

        // To remove field of Comments
        next = next + 1;
        fieldNum = next;
        next = next - 1;
        fieldID = "#comment" + fieldNum;
        $(fieldID).remove();

        $("#count").val(next);
     });   
