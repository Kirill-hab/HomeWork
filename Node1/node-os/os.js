// OS

const os = require('os'); // подключение модуля

// Методы и свойства

// arch - Возвращает архитектуру CPU (string)

let arch = os.arch(); // arm, arm64, ppc, x32, x64 etc.

// console.log(arch);

// свойство constants содержит часто используемые константы для конкретной ОС, а именно коды ошибок, сигналов процесса и тд
// возвращает объект

//console.log(os.constants);

// cpus - Возвращает массив объектов, содержащих информацию о каждом логическом ядре
// CPU (модель, частота, время которое провел ЦПУ в каждом из режимов в милисекундах)

let cpus = os.cpus();

// console.log(cpus);

// свойство devNull отображает путь к нулевому устройству (null device)

//console.log(os.devNull);

/* В Linux системах есть спец виртуальные устройства, в том числе нулевое устройство.
 Когда требуется в качестве источника данных для программы использовать отсутствие источника данных или наоборот,
 перенаправить вывод программы в никуда, используется нулевое устройство.*/


// endianness - Возвращает строку определяющую порядок байтов ЦПУ (BE big-endian or LE - little endian)
// BE - порядок от страшего к младшему, LE - от младшего к старшему
// В том случае, если число не может быть представлено одним байтом, имеет значение, в каком порядке байты
// записываются в памяти компьютера или передаются по линиям связи

let end = os.endianness();

//console.log(end);

// freemem - Возврщает integer количество свободной памяти в системе в байтах (ОЗУ)

let freemem = os.freemem();

//console.log(freemem);

// getPriority([pid]) - возвращает приоритет планирования для процесса, указаного в pid,
// если pid не указан или равен 0 - возвращается приоритет текущего процесса
// pid - id процесса

let prior = os.getPriority();

// console.log(prior);

// homedir - возвращает строку - путь к домашней директории текущего юзера в системе

//console.log(os.homedir());

// hostname() - возвращает имя хоста для ОС

//console.log(os.hostname());

// loadavg - возвращает массив, содержащий средние значения нагрузки на цпу за 1, 5, 15 минут
// Поскольку средняя нагрузка - это специфическая концепция Unix-систем, актуальна только там, в винде вернет 0, 0, 0

//console.log(os.loadavg());

// networkInterfaces - Возвращает объект, содержащий сетевые интерфейсы, которым был назначен сетевой адрес
// Содержит такие важные данные как адрес, маску подсети, мак адрес и тд

//console.log(os.networkInterfaces());

// platform - Возвращает платформу вашей ОС - aix, darwin, freebsd, linux, win32 etc
//console.log(os.platform());

// setPriority([pid]priority) - Пытается установить приоритет для процесса, указаного в pid
// Входным параметром должно быть целое число в диапазоне от -20(наивысший приоритет) до 19 (низкий)

/*try{
    os.setPriority(17);
}catch(err){
    console.log(": error occurred" + err);
}*/

// tmpdir - возвращает директорию ОС в которой хранятся временные файлы
// console.log(os.tmpdir());

// totalmem - возвращает размер общей ОЗУ ОС в байтах
// console.log(os.totalmem());

// type - возвращает тип ОС - linux, darwin, windows etc
// console.log(os.type());

// uptime - возврат кол-ва секунд работы системы
// console.log(os.uptime());

// userInfo([options]) - возвращает информацию о текущем юзере. В качестве параметров
// можно передать кодировку символов для интерпритации результата. По умолчению utf8

// выбросит SystemError если юзер не имеет имени или домашней директории
// console.log(os.userInfo());

// version - возвращает версию ОС

// console.log(os.version());