import { useForm } from 'react-hook-form';
import { useMemo, useState } from 'react';
import { PageHero } from '../components/PageHero';

type BookingFormValues = {
  name: string;
  phone: string;
  email: string;
  venue: string;
  guests: string;
  budget: string;
  servicesNeeded: string;
  message: string;
};

const availabilityByDay: Record<number, 'available' | 'booked' | 'partial'> = {
  2: 'booked',
  5: 'partial',
  8: 'booked',
  11: 'partial',
  16: 'booked',
  19: 'partial',
  23: 'booked',
  27: 'partial',
};

export const BookingPage = () => {
  const { register, handleSubmit, reset } = useForm<BookingFormValues>();
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const days = useMemo(() => Array.from({ length: 30 }, (_, index) => index + 1), []);
  const selectedStatus = availabilityByDay[selectedDay] ?? 'available';

  return (
    <div>
      <PageHero eyebrow="BOOKING" title="Premium event booking with slot and equipment visibility." description="Frontend-ready booking flow with date awareness for Morning, Afternoon and Night slot planning." />
      <section className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="glass-panel rounded-3xl p-7">
          <h2 className="text-3xl">Availability Calendar</h2>
          <p className="mt-3 text-white/65">Pick a date to inspect slot availability and equipment readiness.</p>
          <div className="mt-6 grid grid-cols-7 gap-2">
            {days.map((day) => {
              const status = availabilityByDay[day] ?? 'available';
              const selected = selectedDay === day;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`rounded-xl border px-2 py-2 text-sm transition ${
                    selected
                      ? 'border-[#F4B400] bg-[#F4B400] text-black'
                      : status === 'booked'
                        ? 'border-red-500/50 bg-red-500/15'
                        : status === 'partial'
                          ? 'border-amber-500/50 bg-amber-500/15'
                          : 'border-emerald-500/40 bg-emerald-500/10'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            {['Morning', 'Afternoon', 'Night', 'Equipment'].map((slot) => (
              <div key={slot} className="rounded-2xl border border-white/20 p-3">
                <p>{slot} Slot</p>
                <p className="mt-2 text-xs text-white/65">{selectedStatus === 'booked' ? 'Booked' : selectedStatus === 'partial' ? 'Limited' : 'Available'}</p>
              </div>
            ))}
          </div>
        </article>
        <form
          onSubmit={handleSubmit(() => reset())}
          className="glass-panel grid gap-4 rounded-3xl p-7"
        >
          {(['name', 'phone', 'email', 'venue', 'guests', 'budget', 'servicesNeeded'] as const).map((field) => (
            <input key={field} {...register(field)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="rounded-xl border border-white/15 bg-transparent px-4 py-3 outline-none" />
          ))}
          <textarea {...register('message')} placeholder="Message" className="min-h-28 rounded-xl border border-white/15 bg-transparent px-4 py-3 outline-none" />
          <button type="submit" className="rounded-full bg-[#F4B400] px-6 py-3 font-semibold text-black">Send Booking Request</button>
        </form>
      </section>
    </div>
  );
};
