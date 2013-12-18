# jquery.lightYear

It's just a carousel the you can just keep on clicking.

## Credits, stuff and things

```javascript
/**
* jquery lightYear plugin
* "Scroll for infinity... and beyond!" Well, you can keep scrolling anyway. It's just a carousel. Nothing much.
* @author Phil Steer (@pdincubus)
* https://github.com/pdincubus/jquery.lightYear
*
* Kudos to this demo that gave me the obvious way forward with this:
* http://web.enavu.com/tutorials/making-an-infinite-jquery-carousel/
* Updated to make it a plugin, pass settings, use latest jQuery,
* make more automated, requires less css styles for base setup,
* autoslide options, and easing
*/
```

### HTML Base

```html
<div id="lightYear">
  <div id="navPrev">prev</div>
  <div id="lightYearContain">
        <ul class="cf">
            <li id="first"><a href="#">slide one</a></li>
            <li id="second"><a href="#">slide two</a></li>
            <li id="third"><a href="#">slide three</a></li>
            <li id="fourth"><a href="#">slide four</a></li>
            <li id="fifth"><a href="#">slide five</a></li>
        </ul>
  </div>
  <div id="navNext">next</div>
</div>
```

### Rough CSS

```css
#lightYear {
    width: 880px;
    height: 300px;
    overflow: hidden;
    position: relative;
}

#lightYearContain {
    width: 800px;
    height: 300px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
}

#lightYearContain ul {
    position: relative;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    height: 300px;
}

#lightYearContain ul li {
    float: left;
    width: 800px;
    height: 190px;
    padding-top: 110px;
}

#lightYearContain ul li a {
    color: #FFFFFF;
    text-decoration: none;
    text-align: center;
    font-size: 42px;
    display: block;
}

#navPrev, #navNext {
    position: absolute;
    top: 0;
    overflow: hidden;
    display: block;
    cursor: pointer;
    overflow: hidden;
    text-indent: 101%;
    white-space: nowrap;
    z-index: 5000;
    background-color: #DDDDDD;
    height: 300px;
    width: 40px;
}

#navPrev:after, #navNext:after {
        content: '';
        display: block;
        position: absolute;
        top: 130px;
        cursor: pointer;
    }
}

#navPrev {
    left: 0;
}

#navPrev:after {
    border-top: 11px solid transparent;
    border-bottom: 11px solid transparent;
    border-right: 11px solid #000000;
    width: 0;
    height: 0;
    left: 15px;
}

#navNext {
    right: 0;
}

#navNext:after {
    border-top: 11px solid transparent;
    border-bottom: 11px solid transparent;
    border-left: 11px solid #000000;
    width: 0;
    height: 0;
    left: 15px;
    right: 15px;
}

.invisible {
    visibility: hidden;
}
```

### Add the right scriptages to your page

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="/path/to/jquery.easing-1.3.js"></script>
<script src="/path/to/jquery.lightYear.js"></script>
```

### Init the scriptage

```javascript
$('#lightYear').lightYear({
    'animationDuration' : 500,               //milliseconds
    'slideEasing' : 'swing',                 //default options are swing or linear
    'autoSlide' : true,                      //wait for use interaction?
    'waitTime' : 4000,                       //duration of pause between shlides
    'slideContainer' : 'lightYearContain',   //id that holds JUST the ul for the slides
    'navNext' : 'navNext',                   //id for next button
    'navPrev' : 'navPrev'                    //id for prev button
});
```
