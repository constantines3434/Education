fun main(args: Array<String>) {
    val result = readLine()
        ?.takeIf { it.toIntOrNull() == null }
        ?.let {
            it.split("[ .]+")
                .filter { it.length % 2 == 0 }
                .minByOrNull { it.length }
                ?.lastOrNull()
        }
    result?.let { lastChar ->
        println("Последний символ в последнем самом коротком слове\n" +
                "в слове с чётным числом символов: $lastChar")
    } ?: println("Ошибка: нет слов с четным числом символов")
}
