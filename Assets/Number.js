#pragma strict
@Header ("Title")
var Title : UnityEngine.UI.Text;

@Space (10)

@Header ("InputFields")
var EventName : UnityEngine.UI.InputField;
var Month : UnityEngine.UI.InputField;
var Day : UnityEngine.UI.InputField;
var Year : UnityEngine.UI.InputField;

function Start () {
	yield WaitForSeconds (.1);
	Submit();
	Title.color = new Color(1.0f, 1.0f, 1.0f);
}

function Submit () {
	if (PlayerPrefs.GetFloat("Month") != null && PlayerPrefs.GetFloat("Day") != null && PlayerPrefs.GetFloat("Year") != null) {
		if (PlayerPrefs.GetFloat("Month") > 12 || PlayerPrefs.GetFloat("Month") < 1) {
			Title.color = new Color(1.0f, 0.0f, 0.0f);
			Title.text == "INVALID MONTH";
		}else if (PlayerPrefs.GetFloat("Day") > 31 || PlayerPrefs.GetFloat("Day") < 1) {
			Title.color = new Color(1.0f, 0.0f, 0.0f);
			Title.text == "INVALID DAY";
		}else if (PlayerPrefs.GetFloat("Year") < parseFloat(System.DateTime.UtcNow.ToString("yyyy"))) {
			Title.color = new Color(1.0f, 0.0f, 0.0f);
			Title.text == "INVALID YEAR";
		}else {
			Application.LoadLevel ("Stats");
		}
	}else if (PlayerPrefs.GetFloat("Month") == null) {
		Title.color = new Color(1.0f, 0.0f, 0.0f);
		Title.text == "INSERT MONTH";
	}else if (PlayerPrefs.GetFloat("Day") == null) {
		Title.color = new Color(1.0f, 0.0f, 0.0f);
		Title.text == "INSERT DAY";
	}else if (PlayerPrefs.GetFloat("Year") == null) {
		Title.color = new Color(1.0f, 0.0f, 0.0f);
		Title.text == "INSERT YEAR";
	}else {
		Debug.Log("ERROR WITH SUBMITING");
	}
}

function EventChanger () {
	PlayerPrefs.SetString("EventName", EventName.text);
}

function Months () {
	PlayerPrefs.SetFloat("Month", int.Parse(Month.text));
}

function Days () {
	PlayerPrefs.SetFloat("Day", int.Parse(Day.text));
}

function Years () {
	PlayerPrefs.SetFloat("Year", int.Parse(Year.text));
}