# Rapkology - Türkçe Rap Kültürü Blog Platformu

Modern web teknolojilerini kullanarak geliştirilmiş, rap müzik ve kültürü odaklı bir içerik platformu.

![Rapkology Banner](/public/logo.svg)

## 📋 İçerik

- [Proje Hakkında](#proje-hakkında)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Mimari Yapı](#mimari-yapı)
- [Temel Özellikler](#temel-özellikler)
- [Performans Optimizasyonları](#performans-optimizasyonları)
- [Kullanıcı Deneyimi (UX) Detayları](#kullanıcı-deneyimi-ux-detayları)
- [Responsive Tasarım](#responsive-tasarım)
- [Kurulum](#kurulum)
- [Geliştirme Ortamı](#geliştirme-ortamı)
- [Dağıtım](#dağıtım)

## 🎯 Proje Hakkında

Rapkology, Türkçe rap müziği ve kültürüne odaklanan bir içerik platformudur. Kullanıcılar, güncel rap haberlerini, sanatçı röportajlarını, albüm incelemelerini ve rap kültürüyle ilgili makaleleri keşfedebilir. Platform, modern bir arayüzle kullanıcı deneyimini ön planda tutacak şekilde tasarlanmıştır.

## 💻 Kullanılan Teknolojiler

### Frontend Framework

- **Next.js 15.5.3**: Server-side rendering ve statik sayfa üretimi için React framework'ü
- **React 19.1.0**: Kullanıcı arayüzü bileşenleri için JavaScript kütüphanesi
- **TypeScript 5.x**: Tip güvenliği sağlayan JavaScript süper kümesi

### Stil ve Tasarım

- **Tailwind CSS 4.x**: Utility-first CSS framework'ü
- **Custom CSS Variables**: Tema yönetimi için özel CSS değişkenleri

### Bileşenler ve Animasyonlar

- **Swiper 12.x**: Dokunmatik slider ve karuseller için modern çözüm
- **Next.js Image Component**: Optimizasyonlu görüntü yükleme

### Geliştirme Araçları

- **TurboPack**: Daha hızlı derleme ve geliştirme deneyimi
- **ESLint 9**: Kod kalitesi ve stil kontrolü
- **TypeScript**: Tip kontrolü ve daha güvenli kod

## 🏛️ Mimari Yapı

Uygulama, Next.js'in App Router mimarisi üzerine kurulmuştur. Bu yapı, sayfaların ve rotaların dosya sistemi tabanlı yönetimini sağlar.

### Klasör Yapısı

```
src/
├── app/                # Sayfa rotaları ve layout tanımları
│   ├── blog/           # Blog ana sayfası
│   ├── category/       # Kategori sayfaları
│   ├── post/           # Tekil post görünümleri
│   └── layout.tsx      # Ana sayfa yapısı
├── components/         # Yeniden kullanılabilir UI bileşenleri
│   ├── ui/             # Temel UI bileşenleri
│   └── ...             # Sayfa özel bileşenleri
├── data/               # Mock veri ve API entegrasyonları
├── enums/              # Sabit değerler ve enumlar
├── utils/              # Yardımcı fonksiyonlar
└── types.ts            # TypeScript tip tanımları
```

## ⚙️ Temel Özellikler

### 1. Ana Sayfa Slider Komponenti

Ana sayfadaki slider, öne çıkan içerikleri göstermeyi amaçlar. Bu komponent:

- **Otomatik Kaydırma**: Kullanıcı etkileşimi olmadan içeriği düzenli aralıklarla değiştirir
- **Gezinme Kontrolleri**: İleri/geri butonları ve sayfa işaretleyicileri
- **Responsive Tasarım**: Mobil cihazlardan masaüstüne her ekran boyutu için optimize edilmiş
- **Z-index Yönetimi**: UI elementlerinin doğru sıralanması için katman yönetimi

```tsx
// Slider bileşeni özellikleri
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  navigation
  pagination={{
    clickable: true,
    el: ".swiper-pagination-custom",
    bulletClass: "swiper-pagination-bullet custom-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
  }}
  autoplay={{ delay: 5000 }}
  loop={true}
  className="h-full custom-swiper"
>
```

### 2. Kategorize İçerik Sunumu

İçerikler, farklı kategoriler altında sunularak kullanıcıların ilgi alanlarına göre içerik bulmasını kolaylaştırır:

- **Trends**: Güncel ve popüler içerikler
- **Favorites**: Editör seçimleri ve öne çıkan makaleler
- **Discover**: Keşfedilmeye değer yeni içerikler

### 3. Dinamik Rota Yapısı

Next.js'in dinamik rota yapısı kullanılarak, kategori ve makale sayfaları otomatik olarak oluşturulur:

- `/category/[category]`: Kategori bazlı içerik listeleri
- `/post/[slug]`: Tekil makale görüntüleme

## 🚀 Performans Optimizasyonları

### 1. Görüntü Optimizasyonu

Next.js'in Image komponenti kullanılarak görüntüler optimize edilir:

- **Lazy Loading**: Görüntüler viewport'a girdikçe yüklenir
- **Otomatik Formatlama**: Tarayıcı desteklerine göre en uygun format seçilir (WebP, AVIF)
- **Responsive Boyutlandırma**: Farklı ekran boyutları için otomatik boyutlandırma

### 2. Kod Bölme (Code Splitting)

Next.js'in otomatik kod bölme özelliği sayesinde, sadece gerekli JavaScript ilk yüklemede indirilir. Diğer sayfalar için gereken kod, kullanıcı o sayfalara geçiş yaptıkça yüklenir.

### 3. TurboPack Entegrasyonu

TurboPack ile geliştirme sunucusu ve build işlemleri hızlandırılmıştır. Böylece hem geliştirme süreci hem de son kullanıcı deneyimi optimize edilmiştir.

## 💡 Kullanıcı Deneyimi (UX) Detayları

### 1. Z-Index Yönetimi

UI elementlerinin doğru sırada gösterilmesi için katman yönetimi önemle ele alınmıştır.
Bu yaklaşım, kullanıcıların interaktif elementlere kolaylıkla erişebilmesini sağlar.

### 2. Tipografi Hiyerarşisi

İçerik okunabilirliği için belirli bir tipografi hiyerarşisi uygulanmıştır:

- **Başlıklar**: Bold, uppercase ve büyük punto ile vurgulanır
- **Alt Başlıklar ve Açıklamalar**: Daha küçük punto ve normal kalınlıkta
- **Responsive Font Size**: Ekran boyutlarına göre adapte olan font büyüklükleri

### 3. Renk Şeması ve Kontrast

Kullanıcı deneyimi için optimum kontrast ve marka renkleri düşünülmüştür:

- **Koyu Arkaplan**: (#121212) Rap kültürünün sofistike ve modern algısını destekler
- **Vurgu Rengi**: CSS değişkenleri ile tanımlanmış (`--primary-color`) aksan rengi

## 📱 Responsive Tasarım

Uygulama, çeşitli cihazlarda ideal kullanıcı deneyimini sunmak üzere tamamen responsive tasarlanmıştır:

### Mobil Optimizasyonlar

- **Daha Küçük Slider Yüksekliği**: h-[500px] - mobil ekranlarda daha az dikey alan kaplar
- **Font Boyutları**: text-sm, text-base gibi mobil-öncelikli boyutlar

### Tablet ve Masaüstü Optimizasyonlar

- **Genişletilmiş Slider Yüksekliği**: md:h-[600px] - daha büyük ekranlarda daha etkileyici görünüm
- **Büyük Tipografi**: md:text-4xl, lg:text-5xl gibi ekran boyutuna adapte olan başlıklar

### Breakpoint Stratejisi

Tailwind CSS'in breakpoint sistemi kullanılarak, farklı ekran boyutlarına göre özelleştirilmiş deneyimler:

- **sm**: 640px ve üzeri
- **md**: 768px ve üzeri
- **lg**: 1024px ve üzeri

## 🔧 Kurulum

```bash
# Repoyu klonlayın
git clone https://github.com/sezginakgul/rap-blog.git

# Proje dizinine gidin
cd rap-blog

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak uygulamayı görüntüleyebilirsiniz.

## 👨‍💻 Geliştirme Ortamı

Proje, modern geliştirme araçlarıyla optimize edilmiştir:

- **Next.js App Router**: Sayfa ve rota yönetimi için en güncel Next.js özellikleri
- **TurboPack**: Hızlı build ve geliştirme deneyimi
- **TypeScript**: Tip güvenliği ve daha iyi kod tamamlama

## 📦 Dağıtım

Projenin production ortamına dağıtımı için:

```bash
# Production build oluşturun
npm run build

# Uygulamayı başlatın
npm run start
```

© 2025 Sezgin A.
