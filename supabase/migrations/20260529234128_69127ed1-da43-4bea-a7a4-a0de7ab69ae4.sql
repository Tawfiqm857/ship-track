INSERT INTO storage.buckets (id, name, public)
VALUES ('shipment-files', 'shipment-files', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can read shipment files"
ON storage.objects FOR SELECT
USING (bucket_id = 'shipment-files');

CREATE POLICY "Authenticated users can upload shipment files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'shipment-files');

CREATE POLICY "Authenticated users can update shipment files"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'shipment-files');

CREATE POLICY "Authenticated users can delete shipment files"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'shipment-files');