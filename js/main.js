$( document )
  .ready(function() {
      $('.main')
        .keydown(function() {
          var _this = this;
          setTimeout(function() {
            $('.h2').html( $(_this).val()  );
            $('.h3').html( $(_this).val()  );
            $('.h4').html( $(_this).val()  );
            $('.h5').html( $(_this).val()  );
            $('.h6').html( $(_this).val()  );
          },0);
        });
  });
