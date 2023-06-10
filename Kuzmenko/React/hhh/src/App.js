import './App.css';
import Ccomponent from './Ccomponent.js';
import Afcomponent from './Afcomponent.js';
import Sec_top_stick from './Sec_top_stick.js';
import Five_left_stick from './Five_left_stick.js';
import Seven_right_stick from './Seven_right_stick.js';

//<Ccomponent name="123"/>
function App() {
return (
<div className="App">


		<Five_left_stick  class = "First_top"
						  link = "https://b1.mskagency.ru/c/547136.jpg" 
						  width="1700"
						  height= "800"/>

	<Seven_right_stick class = "Sec_top_stick"
		 text=
		 <p> 
					 <font face="Arial">
					<b>«Остров Мечты»</b> – это самый настоящий остров, на котором есть абсолютно всё для незабываемого отдыха всей семьёй!
					 <br/>
					 Здесь расположен крупнейший в Европе крытый всесезонный парк развлечений с
					 <br/> 
					 захватывающими дух аттракционами и мультипликационными героями.
					 <br/>
					 На его территории вас ждут 9 сказочных миров, более 35 аттракционов, яркие шоу-программы,
					<br/> 
					интерактивные развлечения, тематические кафе и магазины!
					 <br/>
					 <br/>
					 Также на <b>«Острове Мечты»</b> есть накрытое семью стеклянными куполами пространство городского променада с магазинами,
					 <br/> ресторанами, кафе,
					 концертным залом и кинотеатром. 
					 <br/>
					 Улочки этой зоны выполнены в архитектурных стилях мировых стран – вы сможете побывать в Риме,
					 <br/>
					 Барселоне, Лондоне и Беверли-Хиллз, не покупая билет на самолёт!
					 <br/>
					 <br/>
					 Все эти пространства объединяет благоустроенный ландшафтный парк с зонами для активного отдыха и релаксации.
					 <br/>
					 Здесь можно заняться любимым видом спорта, отдохнуть с детьми на одной из детских площадок, развлечься на танцполе,
					 <br/>
					 посетить кинотеатр под открытым небом или отдохнуть на шезлонге у водоёма.
					 <br/>
					 <br/>
					 <b>«Остров Мечты»</b> - остров больших эмоций!
					 </font>
		</p>
		 />	

		<div className="Third_back_glob"></div>

	<div className="Fourth_left_back">


		<Five_left_stick  class = "Five_left_stick"
						  link = "https://dreamisland.ru/upload/resize_cache/iblock/aa2/282_217_2821712164bebe8964a3cb4f91f48bb72/aa2f6988328efc503e0126ee4348b645.jpg" 
						  width="250"
						  height= "200"/>
								
		<Five_left_stick  class = "Five_left_stick"
						  link="https://dreamisland.ru/upload/resize_cache/iblock/c02/282_217_2821712164bebe8964a3cb4f91f48bb72/w8rofu5ivhs1mmhfk0jv1xuyl49ozbd5.jpg" 
						  width="250"
						  height= "200"/>

		<Five_left_stick  class = "Five_left_stick" 
						  link="https://dreamisland.ru/upload/resize_cache/iblock/75a/282_217_2821712164bebe8964a3cb4f91f48bb72/8tuixj1z06fkwnc145szf42y81432ogo.jpg" 
					      width="250"
						  height= "200"/>

		<Five_left_stick  class = "Five_left_stick" 
						  link="https://dreamisland.ru/upload/resize_cache/iblock/49f/282_217_2821712164bebe8964a3cb4f91f48bb72/16ywx816j2unxy63zivlc18xr0j5oyrb.jpg" 
					      width="250"
						  height= "200"/>

	</div>

<script scr="https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.cjs.js"> </script>

<script src="ttps://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.cjs.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data: [
            visible: true
        ]
    });
</script>

	<div className="Six_right_back">



		<Seven_right_stick class = "Seven_right_stick"
		 text=
		 <p>
		<font face="Arial">
		<b>Сладкая карусель</b>
		<br/>
		<br/>
		Разноцветные кабинки-пирожные на кружащемся диске приглашают сесть внутрь.
		<br/>
		Экспресс-вход:
		доступен.
		<br/>
		Рост:
		105 - 130 см в сопровождении
		от 130 см без сопровождения
		<br	/>
		Тип аттракциона:
		Семейные
		</font>
		</p> />	
		
		<Seven_right_stick class = "Seven_right_stick"
		text=
		<p> 
		<font face="Arial">
		<b>Авиагонки</b>
		<br/>
		<br/>
		Почувствуйте себя пилотом авиа-болида!
		Поднимитесь в воздух на летающем болиде и испытайте чувство свободного полёта.
		<br/>
		Экспресс-вход:
		доступен.
		<br/>
		Рост:
		от 105 см
		<br/>
		Тип аттракциона:
		Семейные
		</font>
		</p> />	

		<Seven_right_stick class = "Seven_right_stick"
		text=
		<p> 
		<font face="Arial">
			<b>Молот судьбы</b>
		<br/>
		<br/>
		Подъем на 240 градусов – бешеная скорость,
		<br/>
		гарантированный прилив адреналина!
		<br/>
		Экспресс-вход:
		доступен.
		<br/>
		Рост:
		от 130 см до 185 см
		<br/>
		Тип аттракциона:
		Экстремальные
		</font>
		</p> />	
		
		<Seven_right_stick class = "Seven_right_stick"
		text=
		<p> 
		<font face="Arial">
		<b>Гонка будущего</b>
		<br/>
		<br/>
		Гонка будущего – скоростное приключение в альтернативную
		<br/>
		реальность при помощи VR-технологий!
		<br/>
		Экспресс-вход:
		доступен.
		<br/>
		Рост:
		110 - 130 см в сопровождении
		от 130 см без сопровождения
		<br/>		
		Тип аттракциона:
		Семейные
		</font>
		</p> />	
	
	</div>

		<Five_left_stick class="Eight_bot"
						 link="https://stroi.mos.ru/uploads/media/gallery_media/0001/95/e356dba2d446091ab07329a305076a6eee5b3b32.jpeg" 
						 width="1700"
				         height= "800"/>
	
</div>

);
}

export default App;