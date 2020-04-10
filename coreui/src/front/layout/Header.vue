<template>
  <div class="toolbar">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-12 left_bar">
                    <ul class="left-none">
                        <li class="toolbar_login"><a href="#" data-toggle="modal" data-target="#login_modal"><i class="fa fa-user"></i> Login </a></li>
                        <li class="toolbar_cart"><a href="#"><i class="fa fa-shopping-cart"></i> Cart </a>
                            <ul class="cart_dropdown">
                                <li>0 items, Total of <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>0.00</span> <span class="padding-horizontal-5">|</span> <a href="https://demo.themesuite.com/automotive-wp/cart/">Checkout</a></li>
                            </ul>
                        </li>
                        <li class="toolbar_language"><a href="#"><i class="fa fa-globe"></i> Languages </a></li>
                        <li class="toolbar_search">
                            <form method="GET" action="https://demo.themesuite.com/automotive-wp/" id="header_searchform">
                                <button type="submit"><i class="fa fa-search"></i></button>
                                <input type="search" placeholder="Search" class="search_box" name="s" value="">
                            </form>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-sm-6 col-12 ">
                    <ul class="right-none pull-right company_info">
                        <li class="toolbar_phone  li_mobile_show"><a href="1-800-567-0123"><i class="fa fa-phone"></i> 1-800-567-0123 </a></li>
                        <li class="address toolbar_address"><a href="#"><i class="fa fa-map-marker"></i> 107 SUNSET BLVD., BEVERLY HILLS, CA 90210 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="toolbar_shadow"></div>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
