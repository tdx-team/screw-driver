package org.mirrentools.sd.converter;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.mirrentools.sd.converter.impl.mysql.SdTableToClassConverterImplByMySQL;
import org.mirrentools.sd.models.SdClassContent;

/**
 * 
 * @author <a href="http://szmirren.com">Mirren</a>
 *
 */
public class SdTableToClassConverterTest {
	/** 转换类 */
	private SdTableToClassConverter converter;
	@Before
	public void setUp() {
		converter = new SdTableToClassConverterImplByMySQL();
	}
	@Test
	public void testConverter() {
		SdClassContent content = converter.converter(TestConstant.studentTable);
		System.out.println(content);
		assertEquals("classes_student", content.getTableName());
		assertEquals("classes_student", content.getUnderScoreName());
		assertEquals("classes-student", content.getHyphenName());
		assertEquals("classesStudent", content.getCamelName());
		assertEquals("ClassesStudent", content.getPascalName());
		assertEquals(4, content.getFields().size());

		assertEquals(1, content.getPrimaryField().size());
		assertEquals(1, content.getForeignField().size());
		assertEquals(1, content.getIndexField().size());
		assertEquals(1, content.getOtherField().size());
		assertEquals(2, content.getCantNullField().size());

	}

}
