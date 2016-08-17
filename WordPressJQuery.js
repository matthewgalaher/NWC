/* 
-----------------------------------------
Matthew JQuery Start
This JQuery tests for the string 'Place Holder Text' at the bottom of the portfolio pages and hides related tags/text if no copy is present.
-----------------------------------------
*/

if ($j('body > div.wrapper > div > div > div > div.container > div > div > div.two_columns_75_25.clearfix.portfolio_container > div.column1 > div > div > blockquote:nth-child(2) > p > span:contains("Place Holder Text")').length > 0){
    $j('body > div.wrapper > div > div > div > div.container > div > div > div.two_columns_75_25.clearfix.portfolio_container > div.column1 > div > div > h3').css('display', 'none');  
    $j('body > div.wrapper > div > div > div > div.container > div > div > div.two_columns_75_25.clearfix.portfolio_container > div.column1 > div > div > blockquote:nth-child(2)').css('display', 'none');  
}

/* Scroll To Text Content on Small Screen on pages listed below in code START */

/* Simulate media query with some room for error related to scroll bar width: */
if($j(window).width() < 430){

    /* Get full URL of current page: */
    var curUrl = $j(location).attr('href');

    /* If full URL of current page is any of the following, then add a div tag with an id property above the text content and reload the page so it scrolls to that id property */

    var theDomain = 'http://www.imaginationslive.com/weitzer/'

    if(
        curUrl === theDomain ||
        curUrl === theDomain + 'home-residential/' ||
        curUrl === theDomain + 'home-commercial/' ||
        curUrl === theDomain + '#scrolltothis' ||
        curUrl === theDomain + 'home-residential/#scrolltothis' ||
        curUrl === theDomain + 'home-commercial/#scrolltothis'
    ){
        if(
            /* keep from adding hash more than once (e.g. on page reloads): */
            curUrl !== theDomain + '#scrolltothis' &&
            curUrl !== theDomain + 'home-residential/#scrolltothis' &&
            curUrl !== theDomain + 'home-commercial/#scrolltothis'
        ){
    
         /* jquery adds div with id to DOM */
        $j("<div id='scrolltothis' style='height:85px;'>              </div>").insertBefore('.q_slide_title')
          }
    
        /* jquery reloads page which then scrolls to hash */
        $j(location).attr('href', curUrl + '#scrolltothis');
    }
};

/* Scroll To Text Content on Small Screen END */

/* 
-----------------------------------------
Matthew JQuery End
-----------------------------------------
*/
