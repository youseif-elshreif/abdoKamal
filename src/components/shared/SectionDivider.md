# SectionDivider Component

مكون فاصل جميل للاستخدام بين الأقسام (Sections) في الموقع، مصمم ليتناسق مع ثيم الموقع الحالي.

## الخصائص المتاحة

### `variant` (اختياري)

نوع الفاصل - الافتراضي: `"gradient"`

الأنواع المتاحة:

- `"line"` - خط بسيط مع تدرج
- `"dots"` - نقاط متحركة
- `"wave"` - موجة متحركة
- `"gradient"` - فاصل بتدرج مع نقاط متحركة (الافتراضي)
- `"ornamental"` - فاصل زخرفي أنيق

### `className` (اختياري)

فئات CSS إضافية - الافتراضي: `""`

### `animated` (اختياري)

تفعيل الحركات - الافتراضي: `true`

## أمثلة الاستخدام

```tsx
import { SectionDivider } from "@/components/shared";

// استخدام بسيط
<SectionDivider />

// فاصل بنقاط
<SectionDivider variant="dots" />

// فاصل بموجة
<SectionDivider variant="wave" />

// فاصل زخرفي
<SectionDivider variant="ornamental" />

// بدون حركة
<SectionDivider animated={false} />

// مع فئات إضافية
<SectionDivider variant="gradient" className="my-8" />
```

## الميزات

- ✨ 5 أنواع مختلفة من الفواصل
- 🎭 حركات سلسة ومتدرجة
- 🎨 متناسق مع ثيم الموقع
- 📱 متجاوب مع جميع الشاشات
- ⚡ محسن للأداء
- 🔧 قابل للتخصيص

## التصميم

المكون مصمم ليتناسق مع:

- الألوان الأساسية للموقع (الأزرق والرمادي)
- تأثيرات الزجاج (Glass effects)
- الحركات السلسة
- التدرجات اللونية
