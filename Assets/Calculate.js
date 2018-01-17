#pragma strict
@Header ("All the Text")
var Year : UnityEngine.UI.Text;
var Month : UnityEngine.UI.Text;
var Day : UnityEngine.UI.Text;
var Hours : UnityEngine.UI.Text;
var Minutes : UnityEngine.UI.Text;
var Seconds : UnityEngine.UI.Text;
var Title : UnityEngine.UI.Text;

@Space (10)

@Header ("Current Time")
var Year2 : int;
var Month2 : int;
var Day2 : int;
var Hours2 : int;
var Minutes2 : int;
var Seconds2 : int;

function Start () {
	Title.text = "Time until " + PlayerPrefs.GetString("EventName") + ":";
}

function Update () {
	Debug.Log(System.DateTime.UtcNow.ToString("ss"));
	Year2 = parseFloat(System.DateTime.UtcNow.ToString("yyyy"));
	Month2 = parseFloat(System.DateTime.UtcNow.ToString("MM"));
	Day2 = parseFloat(System.DateTime.UtcNow.ToString("dd"));
	Hours2 = parseFloat(System.DateTime.UtcNow.ToString("HH"));
	Minutes2 = parseFloat(System.DateTime.UtcNow.ToString("mm"));
	Seconds2 = parseFloat(System.DateTime.UtcNow.ToString("ss"));
	
	var Seconds3 = Mathf.Abs((((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)) * 86400 + (Hours2 * 3600) + (Minutes2 * 60) + (60 - Seconds2));
	
	Year.text = Mathf.Abs((PlayerPrefs.GetFloat("Year") - Year2) + ((PlayerPrefs.GetFloat("Month") - Month2) / 12) + ((PlayerPrefs.GetFloat("Day") - Day2) / 365)).ToString("n0") + " Years";
	
	Month.text = Mathf.Abs(((PlayerPrefs.GetFloat("Year") - Year2) * 12) + (PlayerPrefs.GetFloat("Month") - Month2) + ((PlayerPrefs.GetFloat("Day") - Day2) / 30)).ToString("n0") + " Months";
	
	Day.text = Mathf.Abs(((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)).ToString("n0") + " Days";
	
	Hours.text = Mathf.Abs((((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)) * 24 + Hours2).ToString("n0") + " Hours";
	
	Minutes.text = Mathf.Abs((((PlayerPrefs.GetFloat("Year") - Year2) * 365) + ((PlayerPrefs.GetFloat("Month") - Month2) * 30) + (PlayerPrefs.GetFloat("Day") - Day2)) * 1440 + (Hours2 * 60) + Minutes2).ToString("n0") + " Minutes";
	
	Seconds.text = Seconds3.ToString("n0") + " Seconds";
}

function Reset () {
	PlayerPrefs.DeleteAll();
	Application.LoadLevel ("MainMenu");
}

