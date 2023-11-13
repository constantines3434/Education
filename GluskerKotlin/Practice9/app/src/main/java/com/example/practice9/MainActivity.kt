package com.example.practice9

import android.content.res.Configuration
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.*
import androidx.compose.material3.icons.Icons
import androidx.compose.material3.icons.filled.CalendarToday
import androidx.compose.material3.icons.outlined.DateRange
import androidx.compose.material3.icons.outlined.Timeline
import androidx.compose.material3.icons.outlined.Today
import androidx.compose.material3.icons.rounded.CalendarToday
import androidx.compose.material3.icons.rounded.DateRange
import androidx.compose.material3.icons.rounded.Timeline
import androidx.compose.material3.icons.rounded.Today
import androidx.compose.material3.icons.twotone.CalendarToday
import androidx.compose.material3.icons.twotone.DateRange
import androidx.compose.material3.icons.twotone.Timeline
import androidx.compose.material3.icons.twotone.Today
import androidx.compose.material3.text.input.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.practice9.ui.theme.Practice9Theme
import java.util.*

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Practice9Theme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    MainScreen()
                }
            }
        }
    }
}

@Composable
fun MainScreen() {
    var selectedDate by remember { mutableStateOf(Calendar.getInstance()) }
    var zodiacSign by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        DatePicker(
            date = selectedDate,
            onDateChange = { selectedDate = it }
        )

        Spacer(modifier = Modifier.height(16.dp))

        Button(
            onClick = {
                zodiacSign = determineZodiacSign(selectedDate.get(Calendar.DAY_OF_MONTH), selectedDate.get(Calendar.MONTH) + 1)
            },
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp)
        ) {
            Text(text = stringResource(id = R.string.determine_button_text))
        }

        Spacer(modifier = Modifier.height(16.dp))

        Text(
            text = stringResource(id = R.string.result_text, zodiacSign),
            fontWeight = FontWeight.Bold,
            fontSize = 18.sp
        )
    }
}

@Composable
fun DatePicker(
    date: Calendar,
    onDateChange: (Calendar) -> Unit
) {
    var selectedDate by remember { mutableStateOf(date) }
    val context = LocalContext.current
    val configuration = LocalConfiguration.current
    val softwareKeyboardController = LocalSoftwareKeyboardController.current

    OutlinedTextField(
        value = stringResource(
            id = R.string.date_format,
            selectedDate.get(Calendar.DAY_OF_MONTH),
            selectedDate.get(Calendar.MONTH) + 1,
            selectedDate.get(Calendar.YEAR)
        ),
        onValueChange = {},
        label = { Text(text = stringResource(id = R.string.date_picker_label)) },
        trailingIcon = {
            Icon(imageVector = Icons.Default.CalendarToday, contentDescription = null)
        },
        singleLine = true,
        keyboardOptions = KeyboardOptions.Default.copy(
            keyboardType = KeyboardType.Number,
            imeAction = ImeAction.Done
        ),
        keyboardActions = KeyboardActions(
            onDone = {
                softwareKeyboardController?.hide()
            }
        ),
        modifier = Modifier
            .fillMaxWidth()
            .height(56.dp)
            .padding(bottom = 16.dp)
    )
}

@Composable
fun determineZodiacSign(day: Int, month: Int): String {
    when {
        (month == 3 && day >= 21) || (month == 4 && day <= 19) -> return "Овен"
        (month == 4 && day >= 20) || (month == 5 && day <= 20) -> return "Телец"
        (month == 5 && day >= 21) || (month == 6 && day <= 20) -> return "Близнецы"
        (month == 6 && day >= 21) || (month == 7 && day <= 22) -> return "Рак"
        (month == 7 && day >= 23) || (month == 8 && day <= 22) -> return "Лев"
        (month == 8 && day >= 23) || (month == 9 && day <= 22) -> return "Дева"
        (month == 9 && day >= 23) || (month == 10 && day <= 22) -> return "Весы"
        (month == 10 && day >= 23) || (month == 11 && day <= 21) -> return "Скорпион"
        (month == 11 && day >= 22) || (month == 12 && day <= 21) -> return "Стрелец"
        (month == 12 && day >= 22) || (month == 1 && day <= 19) -> return "Козерог"
        (month == 1 && day >= 20) || (month == 2 && day <= 18) -> return "Водолей"
        (month == 2 && day >= 19) || (month == 3 && day <= 20) -> return "Рыбы"
        else -> return "Неизвестный знак"
    }
}