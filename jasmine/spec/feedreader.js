/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        //Tests to make sure that the allFeeds variable has been defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Ensures that each feed has a URL defined and that the URL is not empty.
        it('has URL and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // Ensures that each feed has a name defined and that the name is not empty.
        it('has name and it is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The Menu', function() {
        // Ensures the menu element is hidden by default.
        it('menu should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         // Ensures the menu changes visibility when the menu icon is clicked.
        it('menu changes visibility when clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            //Menu displays when clicked.
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            //Menu hides when clicked again.
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        // Ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the.feed container.
        // Since loadFeed() is asynchronous this test uses Jasmine's beforeEach and asynchronous done() function.
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        // Ensures that there is at least one entry in the feed.
        it('has at least one .entry element within .feed container', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe( 'New Feed Selection', function() {
        // Ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        // Since loadFeed() is asynchronous this test uses Jasmine's beforeEach and asynchronous done() function.
        var initialFeed;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                done();
            });
        });

        it('should change feed content after loading feed', function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                expect(newFeed).not.toBe(initialFeed);
                done();
            });
        });
    });

}());
