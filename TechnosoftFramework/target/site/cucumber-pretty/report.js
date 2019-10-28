$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darksky.feature");
formatter.feature({
  "line": 2,
  "name": "DarkSky homepage feature",
  "description": "",
  "id": "darksky-homepage-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@darksky"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 3692810521,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "DarkSky homepage is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkySD.darkSkyHomePageLaunch()"
});
formatter.result({
  "duration": 1300402841,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify invalid signup error message on DarkSky",
  "description": "",
  "id": "darksky-homepage-feature;verify-invalid-signup-error-message-on-darksky",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@dstest_1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the DarkSky Register page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify error message \u0027Please fill out this field\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.darkSkyRegisterPage()"
});
formatter.result({
  "duration": 2476637792,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.clickOnRegisterButton()"
});
formatter.result({
  "duration": 2087032526,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.verifyTextInputErrorMessage()"
});
formatter.result({
  "duration": 57884234,
  "status": "passed"
});
formatter.after({
  "duration": 115825670,
  "status": "passed"
});
formatter.before({
  "duration": 2903820362,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "DarkSky homepage is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkySD.darkSkyHomePageLaunch()"
});
formatter.result({
  "duration": 1010555127,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Current Temperature should not be greater or less than the Temperature from Daily Timeline",
  "description": "",
  "id": "darksky-homepage-feature;verify-current-temperature-should-not-be-greater-or-less-than-the-temperature-from-daily-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@dstest_2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I verify current temp is not greater or less then temps from daily timeline",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.verifyTemp()"
});
formatter.result({
  "duration": 131712896,
  "status": "passed"
});
formatter.after({
  "duration": 100434688,
  "status": "passed"
});
formatter.before({
  "duration": 1850936847,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "DarkSky homepage is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkySD.darkSkyHomePageLaunch()"
});
formatter.result({
  "duration": 1011264748,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify Today\u0027s timeline temperature value equals to min and max temperatures",
  "description": "",
  "id": "darksky-homepage-feature;verify-today\u0027s-timeline-temperature-value-equals-to-min-and-max-temperatures",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@dstest_3"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I expand today\u0027s timeline",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.expandTodayTimeline()"
});
formatter.result({
  "duration": 4082208373,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.verifyLowestAndHighestTemperature()"
});
formatter.result({
  "duration": 93742781,
  "status": "passed"
});
formatter.after({
  "duration": 112033062,
  "status": "passed"
});
formatter.before({
  "duration": 2584844411,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "DarkSky homepage is launched",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkySD.darkSkyHomePageLaunch()"
});
formatter.result({
  "duration": 1011331462,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify timeline is displayed in correct format",
  "description": "",
  "id": "darksky-homepage-feature;verify-timeline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@dstest_4"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.verifyTimelineDisplaysHoursInTwoHourIncrement()"
});
formatter.result({
  "duration": 163611434,
  "status": "passed"
});
formatter.after({
  "duration": 115221391,
  "status": "passed"
});
});