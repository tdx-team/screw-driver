(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(v,_,t){"use strict";t.r(_);var d=t(0),T=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"数据类型说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型说明"}},[v._v("#")]),v._v(" 数据类型说明")]),v._v(" "),t("p",[v._v("为了屏蔽不同数据库数据类型的差异ScrewDriver提供了"),t("strong",[v._v("SdType")]),v._v("类,该类为SdColumn数据类型常量,\n它会根据不同的数据库自动转换为java与不同数据库对应的类型,你也可以通过put方法添加自定义类型或覆盖默认提供的类型")]),v._v(" "),t("p",[t("strong",[v._v("该类的方法")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("方法名称")]),v._v(" "),t("th",[v._v("接收参数")]),v._v(" "),t("th",[v._v("返回结果")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("put")]),v._v(" "),t("td",[v._v("String key, String 数据库类型, String java类型")]),v._v(" "),t("td",[v._v("void")]),v._v(" "),t("td",[v._v("添加自定义数据类型,如果key已经存在则覆盖原有的,如果不存在则为新增类型")])]),v._v(" "),t("tr",[t("td",[v._v("getDictionary")]),v._v(" "),t("td",[v._v("SdTypeMode 数据类型的模式")]),v._v(" "),t("td",[v._v("Map<String,String>")]),v._v(" "),t("td",[v._v("获取数据类型词典")])])])]),v._v(" "),t("p",[t("strong",[v._v("SQL通用数据类型")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("数据类型")]),v._v(" "),t("th",[v._v("java类型")]),v._v(" "),t("th",[v._v("所有数据库类型")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("CHAR")]),v._v(" "),t("td",[v._v("String")]),v._v(" "),t("td",[v._v("CHAR")])]),v._v(" "),t("tr",[t("td",[v._v("VARCHAR")]),v._v(" "),t("td",[v._v("String")]),v._v(" "),t("td",[v._v("VARCHAR")])]),v._v(" "),t("tr",[t("td",[v._v("REAL")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("REAL")])]),v._v(" "),t("tr",[t("td",[v._v("NUMERIC")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("NUMERIC")])])])]),v._v(" "),t("p",[t("strong",[v._v("数据类型对应")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("数据类型")]),v._v(" "),t("th",[v._v("java")]),v._v(" "),t("th",[v._v("SQLite")]),v._v(" "),t("th",[v._v("MySQL")]),v._v(" "),t("th",[v._v("PostgreSQL")]),v._v(" "),t("th",[v._v("SQL_Server")]),v._v(" "),t("th",[v._v("DB2")]),v._v(" "),t("th",[v._v("ORACLE")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("BYTE")]),v._v(" "),t("td",[v._v("byte")]),v._v(" "),t("td",[v._v("TINYINT")]),v._v(" "),t("td",[v._v("TINYINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("TINYINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("BLOB")])]),v._v(" "),t("tr",[t("td",[v._v("BYTE_ARRAY")]),v._v(" "),t("td",[v._v("byte[]")]),v._v(" "),t("td",[v._v("BLOB")]),v._v(" "),t("td",[v._v("BLOB")]),v._v(" "),t("td",[v._v("BYTEA")]),v._v(" "),t("td",[v._v("IMAGE")]),v._v(" "),t("td",[v._v("BLOB")]),v._v(" "),t("td",[v._v("BLOB")])]),v._v(" "),t("tr",[t("td",[v._v("BOOLEAN_BASIC")]),v._v(" "),t("td",[v._v("boolean")]),v._v(" "),t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("BIT")]),v._v(" "),t("td",[v._v("CHAR")]),v._v(" "),t("td",[v._v("CHAR")])]),v._v(" "),t("tr",[t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("Boolean")]),v._v(" "),t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("BIT")]),v._v(" "),t("td",[v._v("CHAR")]),v._v(" "),t("td",[v._v("CHAR")])]),v._v(" "),t("tr",[t("td",[v._v("STRING")]),v._v(" "),t("td",[v._v("String")]),v._v(" "),t("td",[v._v("NVARCHAR")]),v._v(" "),t("td",[v._v("VARCHAR")]),v._v(" "),t("td",[v._v("VARCHAR")]),v._v(" "),t("td",[v._v("NVARCHAR")]),v._v(" "),t("td",[v._v("VARCHAR")]),v._v(" "),t("td",[v._v("VARCHAR2")])]),v._v(" "),t("tr",[t("td",[v._v("SHORT_BASIC")]),v._v(" "),t("td",[v._v("short")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")])]),v._v(" "),t("tr",[t("td",[v._v("SHORT")]),v._v(" "),t("td",[v._v("Short")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("SMALLINT")])]),v._v(" "),t("tr",[t("td",[v._v("INT_BASIC")]),v._v(" "),t("td",[v._v("int")]),v._v(" "),t("td",[v._v("INTEGER")]),v._v(" "),t("td",[v._v("INT")]),v._v(" "),t("td",[v._v("INTEGER")]),v._v(" "),t("td",[v._v("INT")]),v._v(" "),t("td",[v._v("INTEGER")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("INT")]),v._v(" "),t("td",[v._v("Integer")]),v._v(" "),t("td",[v._v("INTEGER")]),v._v(" "),t("td",[v._v("INT")]),v._v(" "),t("td",[v._v("INTEGER")]),v._v(" "),t("td",[v._v("INT")]),v._v(" "),t("td",[v._v("INTEGER")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("LONG_BASIC")]),v._v(" "),t("td",[v._v("long")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("LONG")]),v._v(" "),t("td",[v._v("Long")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("FLOAT_BASIC")]),v._v(" "),t("td",[v._v("float")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("REAL")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("REAL")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("Float")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("REAL")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("REAL")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("DOUBLE_BASIC")]),v._v(" "),t("td",[v._v("double")]),v._v(" "),t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("DOUBLE PRECISION")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("Double")]),v._v(" "),t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("DOUBLE PRECISION")]),v._v(" "),t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("NUMBER")]),v._v(" "),t("td",[v._v("Number")]),v._v(" "),t("td",[v._v("NUMERIC")]),v._v(" "),t("td",[v._v("NUMERIC")]),v._v(" "),t("td",[v._v("NUMERIC")]),v._v(" "),t("td",[v._v("NUMERIC")]),v._v(" "),t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("NUMBER")])]),v._v(" "),t("tr",[t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("BigDecimal")]),v._v(" "),t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("DECIMAL")])]),v._v(" "),t("tr",[t("td",[v._v("ZONED_DATE_TIME")]),v._v(" "),t("td",[v._v("java.time.ZonedDateTime")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP WITH TIME ZONE")]),v._v(" "),t("td",[v._v("DATETIMEOFFSET")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")])]),v._v(" "),t("tr",[t("td",[v._v("GREGORIAN_CALENDAR")]),v._v(" "),t("td",[v._v("java.util.GregorianCalendar")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP WITH TIME ZONE")]),v._v(" "),t("td",[v._v("DATETIMEOFFSET")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")])]),v._v(" "),t("tr",[t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("java.time.LocalDateTime")]),v._v(" "),t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")])]),v._v(" "),t("tr",[t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("java.time.LocalDate")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")])]),v._v(" "),t("tr",[t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")])]),v._v(" "),t("tr",[t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("java.time.Instant")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")])]),v._v(" "),t("tr",[t("td",[v._v("DATE_UTIL")]),v._v(" "),t("td",[v._v("java.util.Date")]),v._v(" "),t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")])]),v._v(" "),t("tr",[t("td",[v._v("CALENDAR")]),v._v(" "),t("td",[v._v("java.util.Calendar")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")])]),v._v(" "),t("tr",[t("td",[v._v("DATE_SQL")]),v._v(" "),t("td",[v._v("java.sql.Date")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATEDATE")]),v._v(" "),t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("DATE")])]),v._v(" "),t("tr",[t("td",[v._v("TIME_SQL")]),v._v(" "),t("td",[v._v("java.sql.Time")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("TIMESTAMP")])]),v._v(" "),t("tr",[t("td",[v._v("TIMESTAMP_SQL")]),v._v(" "),t("td",[v._v("java.sql.Timestamp")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("TIMESTAMP")])])])]),v._v(" "),t("p",[t("strong",[v._v("JDBC与java类型映射")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("SQL")]),v._v(" "),t("th",[v._v("Java")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("NULL")]),v._v(" "),t("td",[v._v("null")])]),v._v(" "),t("tr",[t("td",[v._v("JAVA_OBJECT")]),v._v(" "),t("td",[v._v("Object")])]),v._v(" "),t("tr",[t("td",[v._v("BOOL")]),v._v(" "),t("td",[v._v("Boolean")])]),v._v(" "),t("tr",[t("td",[v._v("BOOLEAN")]),v._v(" "),t("td",[v._v("Boolean")])]),v._v(" "),t("tr",[t("td",[v._v("BIT")]),v._v(" "),t("td",[v._v("Boolean")])]),v._v(" "),t("tr",[t("td",[v._v("TINYINT")]),v._v(" "),t("td",[v._v("byte")])]),v._v(" "),t("tr",[t("td",[v._v("SMALLINT")]),v._v(" "),t("td",[v._v("Short")])]),v._v(" "),t("tr",[t("td",[v._v("INT2")]),v._v(" "),t("td",[v._v("Short")])]),v._v(" "),t("tr",[t("td",[v._v("SMALLSERIAL")]),v._v(" "),t("td",[v._v("Short")])]),v._v(" "),t("tr",[t("td",[v._v("SERIAL2")]),v._v(" "),t("td",[v._v("Short")])]),v._v(" "),t("tr",[t("td",[v._v("INT")]),v._v(" "),t("td",[v._v("Integer")])]),v._v(" "),t("tr",[t("td",[v._v("INT4")]),v._v(" "),t("td",[v._v("Integer")])]),v._v(" "),t("tr",[t("td",[v._v("INTEGER")]),v._v(" "),t("td",[v._v("Integer")])]),v._v(" "),t("tr",[t("td",[v._v("SERIAL")]),v._v(" "),t("td",[v._v("Integer")])]),v._v(" "),t("tr",[t("td",[v._v("SERIAL4")]),v._v(" "),t("td",[v._v("Integer")])]),v._v(" "),t("tr",[t("td",[v._v("BIGINT")]),v._v(" "),t("td",[v._v("Long")])]),v._v(" "),t("tr",[t("td",[v._v("INT8")]),v._v(" "),t("td",[v._v("Long")])]),v._v(" "),t("tr",[t("td",[v._v("SERIAL8")]),v._v(" "),t("td",[v._v("Long")])]),v._v(" "),t("tr",[t("td",[v._v("BIGSERIAL")]),v._v(" "),t("td",[v._v("Long")])]),v._v(" "),t("tr",[t("td",[v._v("DECIMAL")]),v._v(" "),t("td",[v._v("Number")])]),v._v(" "),t("tr",[t("td",[v._v("REAL")]),v._v(" "),t("td",[v._v("Number")])]),v._v(" "),t("tr",[t("td",[v._v("FLOAT")]),v._v(" "),t("td",[v._v("Float")])]),v._v(" "),t("tr",[t("td",[v._v("DOUBLE")]),v._v(" "),t("td",[v._v("Double")])]),v._v(" "),t("tr",[t("td",[v._v("NUMERIC")]),v._v(" "),t("td",[v._v("java.math.BigDecimal")])]),v._v(" "),t("tr",[t("td",[v._v("MONEY")]),v._v(" "),t("td",[v._v("java.math.BigDecimal")])]),v._v(" "),t("tr",[t("td",[v._v("CHAR")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("NCHAR")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("VARCHAR")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("NVARCHAR")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("VARCHAR2")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("LONGVARCHAR")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("CLOB")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("TEXT")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("TINYTEXT")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("MEDIUMTEXT")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("LONGTEXT")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("CHARACTER")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("CHARACTER_VARYING")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("GRAPHIC")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("VARGRAPHIC")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("JSON")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("JSONB")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("SQLXML")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("SET")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("ENUM")]),v._v(" "),t("td",[v._v("String")])]),v._v(" "),t("tr",[t("td",[v._v("BINARY")]),v._v(" "),t("td",[v._v("byte[]")])]),v._v(" "),t("tr",[t("td",[v._v("VARBINARY")]),v._v(" "),t("td",[v._v("byte[]")])]),v._v(" "),t("tr",[t("td",[v._v("LONGVARBINARY")]),v._v(" "),t("td",[v._v("byte[]")])]),v._v(" "),t("tr",[t("td",[v._v("BLOB")]),v._v(" "),t("td",[v._v("byte[]")])]),v._v(" "),t("tr",[t("td",[v._v("DATETIME")]),v._v(" "),t("td",[v._v("java.time.LocalDateTime")])]),v._v(" "),t("tr",[t("td",[v._v("DATE")]),v._v(" "),t("td",[v._v("java.time.LocalDate")])]),v._v(" "),t("tr",[t("td",[v._v("TIME")]),v._v(" "),t("td",[v._v("java.time.LocalTime")])]),v._v(" "),t("tr",[t("td",[v._v("TIMESTAMP")]),v._v(" "),t("td",[v._v("java.time.Instant")])]),v._v(" "),t("tr",[t("td",[v._v("TIME_WITH_TIMEZONE")]),v._v(" "),t("td",[v._v("java.time.ZonedDateTime")])]),v._v(" "),t("tr",[t("td",[v._v("OTHER")]),v._v(" "),t("td",[v._v("Object")])])])])])}),[],!1,null,null,null);_.default=T.exports}}]);