package org.mirrentools.sd.options.def;

import org.mirrentools.sd.converter.impl.SdTemplateContentConverterDefaultImpl;
import org.mirrentools.sd.converter.impl.sqlite.SdClassConverterSqliteImpl;
import org.mirrentools.sd.converter.impl.sqlite.SdTableContentConverterSqliteImpl;
import org.mirrentools.sd.converter.impl.sqlite.SdTableToClassConverterSqliteImpl;
import org.mirrentools.sd.impl.ScrewDriverTemplateFreeMarkerImpl;
import org.mirrentools.sd.impl.dbutil.SdDbUtilSqliteImpl;
import org.mirrentools.sd.options.ScrewDriverOptions;
import org.mirrentools.sd.options.SdDatabaseOptions;

/**
 * SQLite版配置
 * 
 * @author <a href="http://mirrentools.org">Mirren</a>
 *
 */
public class ScrewDriverSqliteOptions extends ScrewDriverOptions {
	/**
	 * 初始化一个SQLite版的ScrewDriver配置,用于仅生成SQL
	 * 
	 * 
	 * @param databaseOptions 数据库连接信息
	 */
	public ScrewDriverSqliteOptions(SdDatabaseOptions databaseOptions) {
		init(databaseOptions);
	}

	/**
	 * 初始化
	 * 
	 * @param templateMaps    模板集合
	 * @param databaseOptions 数据库连接信息
	 */
	private void init(SdDatabaseOptions databaseOptions) {
		super.setDatabaseOptions(databaseOptions);
		super.setTemplateContentConverter(new SdTemplateContentConverterDefaultImpl());
		super.setTemplateEngine(new ScrewDriverTemplateFreeMarkerImpl());
		super.setBeanConverter(new SdClassConverterSqliteImpl());
		super.setTableConverter(new SdTableContentConverterSqliteImpl());
		super.setClassConverter(new SdTableToClassConverterSqliteImpl());
		super.setDbUtil(new SdDbUtilSqliteImpl(databaseOptions));
	}

}
