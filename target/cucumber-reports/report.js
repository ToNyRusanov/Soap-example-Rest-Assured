$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SoapRestAssuredExample.feature");
formatter.feature({
  "line": 1,
  "name": "SOAP request with Rest Assured",
  "description": "",
  "id": "soap-request-with-rest-assured",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "scenario description",
  "description": "",
  "id": "soap-request-with-rest-assured;scenario-description",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@soap1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "a request with bank code \u003cbank_code\u003e is send",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "bank name in response xml should be \u003cbank_name\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "soap-request-with-rest-assured;scenario-description;",
  "rows": [
    {
      "cells": [
        "bank_code",
        "bank_name"
      ],
      "line": 8,
      "id": "soap-request-with-rest-assured;scenario-description;;1"
    },
    {
      "cells": [
        "10120800",
        "VON"
      ],
      "line": 9,
      "id": "soap-request-with-rest-assured;scenario-description;;2"
    },
    {
      "cells": [
        "45261547",
        "Volksbank"
      ],
      "line": 10,
      "id": "soap-request-with-rest-assured;scenario-description;;3"
    },
    {
      "cells": [
        "50662299",
        "Raiffeisenbank"
      ],
      "line": 11,
      "id": "soap-request-with-rest-assured;scenario-description;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 353445087,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "scenario description",
  "description": "",
  "id": "soap-request-with-rest-assured;scenario-description;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@soap1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "a request with bank code 10120800 is send",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "bank name in response xml should be VON",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10120800",
      "offset": 25
    }
  ],
  "location": "SoapStepDef.a_request_with_bank_code_is_send(String)"
});
formatter.result({
  "duration": 1246753719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VON",
      "offset": 36
    }
  ],
  "location": "SoapStepDef.bank_name_in_response_xml_should_be(String)"
});
formatter.result({
  "duration": 496027592,
  "status": "passed"
});
formatter.before({
  "duration": 40198,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "scenario description",
  "description": "",
  "id": "soap-request-with-rest-assured;scenario-description;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@soap1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "a request with bank code 45261547 is send",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "bank name in response xml should be Volksbank",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "45261547",
      "offset": 25
    }
  ],
  "location": "SoapStepDef.a_request_with_bank_code_is_send(String)"
});
formatter.result({
  "duration": 259163726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Volksbank",
      "offset": 36
    }
  ],
  "location": "SoapStepDef.bank_name_in_response_xml_should_be(String)"
});
formatter.result({
  "duration": 36262089,
  "status": "passed"
});
formatter.before({
  "duration": 98732,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "scenario description",
  "description": "",
  "id": "soap-request-with-rest-assured;scenario-description;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@soap1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "a request with bank code 50662299 is send",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "bank name in response xml should be Raiffeisenbank",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "50662299",
      "offset": 25
    }
  ],
  "location": "SoapStepDef.a_request_with_bank_code_is_send(String)"
});
formatter.result({
  "duration": 152220941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raiffeisenbank",
      "offset": 36
    }
  ],
  "location": "SoapStepDef.bank_name_in_response_xml_should_be(String)"
});
formatter.result({
  "duration": 11315132,
  "status": "passed"
});
});